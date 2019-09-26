import actions from "./actions_for_Portfolio"
import { urlPrefix } from '../../secrets'
import axios from 'axios'
import gql from 'graphql-tag'
import { client } from '../../app/main'

function makeHeader(token){
  
  return { headers: {"Authorization": 'Bearer ' + token}}
}

// local storage has no TTL mechanism like Redis,
// so we have to roll our own 

function epoch(){

  // Unix epoch converted hours
  return ( (new Date).getTime() / 1000 ) / (60*60)
}

function setTTL(hours){

  return epoch() + hours
}

function hasTTLExpired(endTime){

  let current = epoch()

  return current > endTime
}

// graphql migration note-
// "portfolio" corresponds to [ Holdings ]

// for mobile, want to hydrate full portfolio
// by login call, whereas with desktop we can make granular calls

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

    console.log(all_individual_stock_data)
      
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

  /*

  let { symbol } = selectedPortfolioItem

  // basic pattern of implementing local storage with Unix epoch TTL

  // data for the time series chart

  {

    let inLocalStorage = !!localStorage.getItem(`time-series-${symbol}`)  // returns null if key doesn't exist
    
    let expired = hasTTLExpired(localStorage.getItem(`time-series-${symbol}-TTL`)) 
    
    if( inLocalStorage && !expired ){
      
      dispatch(actions.handleHistoricalPrice({ symbol, historical: JSON.parse(localStorage.getItem(`time-series-${symbol}`))}))
    }
    else{

      let data 

      try{

        data = await axios.post( urlPrefix + `/time-series/${symbol}`, {}, makeHeader(token) ) 

      }
      catch(error){

        console.log(error)
      }
        
      if(data){
        
        let { historical } = data.data
        dispatch(actions.handleHistoricalPrice({ symbol, historical }))
        localStorage.setItem(`time-series-${symbol}`, JSON.stringify(historical))
        localStorage.setItem(`time-series-${symbol}-TTL`, setTTL(60*60*24) )
      }        
    }
  }
  
  // data for the news section
  
  {

    let inLocalStorage = !!localStorage.getItem(`news-${symbol}`)  
    
    let expired = hasTTLExpired(localStorage.getItem(`news-${symbol}-TTL`)) 
    
    if( inLocalStorage && !expired ){
      
      dispatch(actions.handleNews({ symbol, data: JSON.parse(localStorage.getItem(`news-${symbol}`))}))
    }
    else{
      
      let data 
      
      try{
        
        let response = await axios.post( urlPrefix + `/news/${symbol}`, {}, makeHeader(token) ) 

        data = response.data
      }
      catch(error){

        console.log(error)
      }
                
      if(data){
        
          dispatch(actions.handleNews({ symbol, data }))
          localStorage.setItem(`news-${symbol}`, JSON.stringify(data))
          localStorage.setItem(`news-${symbol}-TTL`, setTTL(.30) )
        }
      }
  }


  // data for the quarterly financials section
  {

    let inLocalStorage = !!localStorage.getItem(`financials-${symbol}`)  
    
    let expired = hasTTLExpired(localStorage.getItem(`financials-${symbol}-TTL`)) 
    
    if( inLocalStorage && !expired ){
      
      dispatch(actions.handleFinancials({ symbol, financials: JSON.parse(localStorage.getItem(`financials-${symbol}`))}))
    }
    else{

      let data 

      try{

        data = await axios.post( urlPrefix + `/financials/${symbol}`, {}, makeHeader(token) ) 

      }
      catch(error){

        console.log(error)
      }
        
      if(data){
        
        let { financials } = data.data
        dispatch(actions.handleFinancials({ symbol, financials }))
        localStorage.setItem(`financials-${symbol}`, JSON.stringify(financials))
        localStorage.setItem(`financials-${symbol}-TTL`, setTTL(60*60*24) )
      }        
    }
  }

  */

}














// this handles both making a trade
// and adding a symbol to the watchlist

export const makeTradeThunk = (symbol, Quantity, Type, Price, token, isNewSymbol) => async dispatch => {

  /*
    endpoint expects:
     Symbol: '',
     Quantity: '',
     Type: 'Buy',
     Price: ''
  */
 
    Quantity = Number(Quantity) 

    let trade 

    try{

      trade = await axios.post( urlPrefix + '/maketransaction', {Symbol: symbol, Quantity, Type, Price}, makeHeader(token)) 
    }
    catch(err){

      console.log(err)
    }
    
    trade = trade.data

    let transactionHistory 
    
    try{

      let data = await axios.post(urlPrefix + '/getallTransactions', {}, makeHeader(token))
      
      transactionHistory = JSON.parse(data.data)
    }
    catch(error){
      console.log(error)
    }

    if(isNewSymbol){

      let response = await getOpeningPriceThunk(symbol, token)

      console.log(response)

      trade.data = response
    }

    dispatch(actions.makeTrade({symbol, trade, transactionHistory})) 

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
