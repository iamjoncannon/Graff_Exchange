import actions from "./actions_for_Portfolio"
import { urlPrefix } from '../../secrets'
import axios from 'axios'

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
  
  // initialize each portfolio with an empty data object
  // so this doesn't throw an error later

  for(let stock in portfolio){
    
    portfolio[stock].data = {}
  }
  
  // update the store with what we have now, so it can
  // start updating the table- this will cause the view
  // to update gradually rather than waiting for all the data
  // to return from the api 

  dispatch(actions.hydratePortfolio( { portfolio : {...portfolio}, 
                                       transactionHistory: {...JSON.parse(transactionHistory.data)},                 
                                       financials : null,
                                       historical : null,
                                       news : null
                                      } 
                                     ))
  
  // we have the initial portfolio, now we need to add current data
  // from an external API using an endpoint from the Gopher API

  if(portfolio && transactionHistory.data){

    for(let stock in portfolio){
                                        // hoisted below
        portfolio[stock].data = await getOpeningPriceThunk(stock, token)

    }

    dispatch(actions.hydratePortfolio( { portfolio : {...portfolio}, 
                                         transactionHistory: {...JSON.parse(transactionHistory.data)},                 
                                        } ))
  }
  else{

    // registration user story:
    // callback({}, {1:{Symbol: "", Quantity: "", Date: ""}})
  }
  
};


// this may not be orthodox OOP, but we can have the 
// thunk manage whether to update the single page data 
// by testing whether the various data sources have been 
// retrieved yet- the function will be called every time
// the page changes, but the thunk won't make an ajax call
// unless it needs to

export const hydrateSinglePortfolioPage = (token, selectedPortfolioItem) => async dispatch => {

  let {symbol} = selectedPortfolioItem

  // data for the news section

  if(!selectedPortfolioItem["news"]){

    // console.log("calling news api for", symbol)

    const newsUrl = `https://stocknewsapi.com/api/v1?tickers=${symbol}&items=30&token=pzxhc4yhkhonwmopm8ip6l8bvfspwjtpzxpr4pkp`
    
    axios.get(newsUrl).then( ({ data }) => {
    
      dispatch(actions.handleNews({ symbol, data }))
    })
  }
  else{
    // console.log("not calling news api for", symbol)
  }

  
  // these can go into local storage since they're not time sensitive


  // data for the quarterly financial statements

  const quarterlyfinancialsURL = `https://api.financialmodelingprep.com/api/v3/financials/income-statement/${symbol}?period=quarter`

  axios.get(quarterlyfinancialsURL).then( ({ data }) => {
      
    let { financials } = data 
   
    dispatch(actions.handleFinancials({ symbol, financials }))
  })

  // data for the time series chart
  
  const timeSeriesData = `https://financialmodelingprep.com/api/v3/historical-price-full/${symbol}?timeseries=365`

  axios.get(timeSeriesData).then( ({ data }) => {

    const { historical } = data

    dispatch(actions.handleHistoricalPrice({ symbol, historical }))
  })
}





export const makeTradeThunk = () => dispatch => {
 

  
};

export const getOnePriceThunk = () => dispatch => {
 

  
};

async function getOpeningPriceThunk (symbol, token) {
  
  const url = urlPrefix + '/ohlc/' + symbol

  let returned_data  

  try {

    returned_data = await axios.post(url, {}, makeHeader(token))

  }
  catch(error){
    console.log(error)
  }

  // returned from redis cache
  if(typeof returned_data.data === "string"){

    returned_data = JSON.parse(returned_data.data)

  }
  else{
    
    returned_data = returned_data.data
  }
  
  return returned_data
}

export default {
	hydratePortfolioThunk,
	makeTradeThunk,
	getOnePriceThunk,
}


function makeHeader(token){
  
  return { headers: {"Authorization": 'Bearer ' + token}}
}