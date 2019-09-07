import actions from "./actions_for_Portfolio"
import { urlPrefix } from '../../secrets'
import axios from 'axios'

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

  let current = epoch() / (60*60)

  return current > endTime
}

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
  
  // prevent nullish errors

  for(let stock in portfolio){
    
    portfolio[stock].data = {}
  }
  
  // update the store with what we have now, so it can
  // start updating the table- this will cause the view
  // to update gradually rather than waiting for all the data
  // to return from the api in the next calls

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

    // registration user story
    // callback({}, {1:{Symbol: "", Quantity: "", Date: ""}})

  }
  
};


// data will also be cached in local storage

export const hydrateSinglePortfolioPage = (token, selectedPortfolioItem) => async dispatch => {

  let { symbol } = selectedPortfolioItem

  // data for the news section

  // basic pattern of implementing local storage with Unix epoch TTL
  let inLocalStorage = !!localStorage.getItem(`news-${symbol}`)  // returns null if key doesn't exist

  let expired = hasTTLExpired(localStorage.getItem(`news-${symbol}-TTL`)) 
  
  if( inLocalStorage && !expired ){

    dispatch(actions.handleNews({ symbol, data: JSON.parse(localStorage.getItem(`news-${symbol}`))}))
  }
  else{

    // calling the Gopher API
    axios.post( urlPrefix + `/news/${symbol}`, {}, makeHeader(token) ).then( ({ data }) => {
      
      dispatch(actions.handleNews({ symbol, data }))
      
      localStorage.setItem(`news-${symbol}`, JSON.stringify(data))
      localStorage.setItem(`news-${symbol}-TTL`, setTTL(.30) )
    })
    .catch(error=> console.log(error))
  }

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

export const makeTradeThunk = (symbol, Quantity, Type, Price, token) => async dispatch => {

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

    dispatch(actions.makeTrade({symbol, trade})) 
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
}
