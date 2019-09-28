import actions from "./actions_for_Portfolio"
import gql from 'graphql-tag'
import { client } from '../../app/main'

export const hydratePortfolioThunk = () => async dispatch => {
 
  const query = gql`query hydrate_portfolio_query{
                      hydrate_portfolio{
                        holdings {
                          user_data{
                            symbol
                          }
                          ohlc_data{
                            companyName
                            latestPrice 
                            change
                            changePercent
                            open 
                          }
                        }
                      }
                    }`
 
  let response

    try {

      let { data : { hydrate_portfolio } } = await client.query({ query })
      
      response = hydrate_portfolio
    }
    catch(error){

      console.log(error)
    }


  dispatch(actions.hydratePortfolio( response ))

};

// called by web version after log in 

export const hydrateSinglePortfolioPage = ( selectedPortfolioItem ) => async dispatch => {

  const symbol  = selectedPortfolioItem

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

export const makeTradeThunk = (symbol, quantity, type, price, isNewSymbol) => async dispatch => {
  
    // refactor this 
    const graphQL_string =  !isNewSymbol ? `mutation make_trade_mutation_call($input: make_transaction_input) {

      make_trade_mutation(input: $input) {
        
        transaction_result {
          
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

        transaction_result {
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

export const hydrateNewsThunk = ( symbol ) => async dispatch =>{

  const query = gql`query hydrate_news_query($symbol: String){
  
    hydrate_news(symbol: $symbol){
      title
      date
      text
      image_url
      news_url
    }
  }`

  const variables = { symbol }

  let response

  try {

    let { data : {hydrate_news}} = await client.query({ query, variables })
    
    response = hydrate_news
  }
  catch(error){

    console.log(error)
  }

  dispatch(actions.handleNews({news: response, symbol}))
} 

export const hydrateQuarterlyFinancialsThunk = ( symbol ) => async dispatch =>{

  const query = gql`query hydrate_quarterly_financials_query($symbol: String){
  
    hydrate_quarterly_financials(symbol: $symbol){
      data
    }
  }`

  const variables = { symbol }

  let response

  try {

    let { data : {hydrate_quarterly_financials}} = await client.query({ query, variables })
    
    response = hydrate_quarterly_financials
  }
  catch(error){

    console.log(error)
  }

  dispatch(actions.handleFinancials({quarterly_financials: JSON.parse(response.data), symbol}))
} 

export const hydrateTimeSeriesDataThunk = ( symbol ) => async dispatch =>{

  const query = gql`query hydrate_time_series_data_query($symbol: String){
  
    hydrate_time_series_data(symbol: $symbol){
      date
      open
      high
      low
      close
    }
  }`

  const variables = { symbol }

  let response

  try {

    let { data : { hydrate_time_series_data }} = await client.query({ query, variables })
    
    response = hydrate_time_series_data
  }
  catch(error){

    console.log(error)
  }

  dispatch(actions.handleHistoricalPrice({historical: response, symbol}))
} 

export default {
	hydratePortfolioThunk,
	makeTradeThunk,
}
