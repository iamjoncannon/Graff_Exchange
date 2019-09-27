import actions from "./actions_for_Portfolio"
import { urlPrefix } from '../../secrets'
import axios from 'axios'
import gql from 'graphql-tag'
import { client } from '../../app/main'

// called by non-mobile clients 
// will just the OHLC data portion 
// of the login call for mobile 

export const hydratePortfolioThunk = (token) => async dispatch => {
 
  let portfolio
  let transactionHistory

  try {

    Promise.all( // allows us to run api calls in parallel rather than serially
      [ 
        ( portfolio = await axios.post( urlPrefix + '/getportfolio', {}, makeHeader(token)) ),
        ( transactionHistory = await axios.post(urlPrefix + '/getallTransactions', {}, makeHeader(token)) )
      ]
    )
  }
  catch(error){

    console.log(error)
  }
  
  portfolio = JSON.parse(portfolio.data)
  
  // prevent null errors

  for(let stock in portfolio){
    
    portfolio[stock].data = {}
  }
  
  // update the store with what we have now, so it can
  // start updating the table- this will cause the view
  // to update gradually rather than waiting for all the data
  // to return from the api in the next calls

  dispatch(actions.hydratePortfolio( { portfolio : {...portfolio}, 
                                       transactionHistory: {...JSON.parse(transactionHistory.data)},                 
                                      //  financials : null,
                                      //  historical : null,
                                      //  news : null
                                      } 
                                     ))
  
  // we have the initial portfolio, now we need to add current data
  // from an external API using an endpoint from the Gopher API

  for(let stock in portfolio){
                                      // hoisted below
      portfolio[stock].data = await getOpeningPriceThunk(stock, token)

  }

  dispatch(actions.hydratePortfolio( { portfolio : {...portfolio}, 
                                        transactionHistory: {...JSON.parse(transactionHistory.data)},                 
                                      } ))
  

};


// this hydrates data for a specific stock holding
// on the "holdings" page- each data component
// is cached in localstorage and redis

export const hydrateSinglePortfolioPage = ( selectedPortfolioItem ) => async dispatch => {

  const { symbol } = selectedPortfolioItem

  const query = gql`query individual_stock_data_call($symbol:String){
  
    all_individual_stock_data(symbol: $symbol ){
      
      news{
        title
        date
        text
        image_url 
        news_url 
      }
      quarterly_financials {
        data
      }
      time_series {
        date
        open
        high
        low
        close
      }
    }
  }`

  let variables = { symbol }

  let news
  let quarterly_financials 
  let historical 

  try {

    let { data : {all_individual_stock_data} } = await client.query({ query, variables })
      
    news = all_individual_stock_data.news
    quarterly_financials = JSON.parse(all_individual_stock_data.quarterly_financials.data)
    historical = all_individual_stock_data.time_series
  }
  catch(error){

    console.log(error)
  }

  dispatch(actions.handleNews({ symbol, news }))

  dispatch(actions.handleFinancials({ symbol, quarterly_financials }))

  dispatch(actions.handleHistoricalPrice({ symbol, historical }))

}

// this handles both making a trade
// and adding a symbol to the watchlist

export const makeTradeThunk = (symbol, quantity, type, price, _, isNewSymbol) => async dispatch => {
  
    // theres definitely a better way to do this 
    const graphQL_string =  !isNewSymbol ? `mutation make_trade_mutation_call($input: make_transaction_input) {

      make_trade_mutation(input: $input) {
        transaction_result{
          symbol
          balance 
          new_holding
          transaction {
            symbol 
            quantity
            price 
            type
            date_conducted
          }
        }
      }
    }` : `mutation make_trade_mutation_call($input: make_transaction_input) {

      make_trade_mutation(input: $input) {

        transaction_result{
          symbol
          balance 
          new_holding 

          transaction {
            symbol 
            quantity
            price 
            type
            date_conducted
          }
        }
        ohlc_data{
          companyName
          latestPrice
          change
          changePercent
          open
        }
      }
    }`
    
    const mutation = gql`${graphQL_string}`

    quantity = Number(quantity)

    let variables = { input : { symbol, quantity, type, price } }

    let response

    try {

      let { data : { make_trade_mutation } } = await client.mutate({ mutation, variables })
      
      response = make_trade_mutation
    }
    catch(error){

      console.log(error)
    }

    let { transaction_result } = response 

    if(response.ohlc_data){

      let { ohlc_data } = response

      dispatch(actions.makeTrade({ transaction_result, ohlc_data })) 
    }
    else{
      
      dispatch(actions.makeTrade({ transaction_result })) 
    }  
};

// after the portfolio is loaded, each stock gets
// updated with additional data from an ohlc endpoint-
// this is only cached in redis

async function getOpeningPriceThunk (symbol, token) {
  
  const url = urlPrefix + '/ohlc/' + symbol

  let returnData  

  try {

    let { data } = await axios.post(url, {}, makeHeader(token))

    returnData = data

  }
  catch(error){
    console.log(error)
  }

  // returned from redis cache

  if(typeof returnData === "string"){

    try{

      returnData = JSON.parse(returnData)
    }
    catch(error){
      
      console.log("error reading JSON: ", symbol, error)
    }
  }
  
  return returnData
}



export default {
	hydratePortfolioThunk,
	makeTradeThunk,
}
