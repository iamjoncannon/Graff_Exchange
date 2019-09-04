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
                                     } ))
  
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