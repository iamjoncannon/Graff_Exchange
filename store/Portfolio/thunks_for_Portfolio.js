import actions from "./actions_for_Portfolio"
import { urlPrefix } from '../../secrets'
import axios from 'axios'

export const hydratePortfolioThunk = (token) => async dispatch => {
 
  let portfolio
  let transactionHistory

  console.log(token)

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
 
  return fetch('/maketransaction')
      .then((resp) => resp.json()) 
      .then(function( {data} ) {
 
          dispatch(actions.makeTrade(data))
  });
};

export const getOnePriceThunk = () => dispatch => {
 
  return fetch('/illfigureitout')
      .then((resp) => resp.json()) 
      .then(function( {data} ) {
 
          dispatch(actions.getOnePrice(data))
  });
};

export const getOpeningPriceThunk = () => dispatch => {
 
  return fetch('/ohlc/')
      .then((resp) => resp.json()) 
      .then(function( {data} ) {
 
          dispatch(actions.getOpeningPrice(data))
  });
};

export default {
	hydratePortfolioThunk,
	makeTradeThunk,
	getOnePriceThunk,
	getOpeningPriceThunk,
}


function makeHeader(token){
  
  return { headers: {"Authorization": 'Bearer ' + token}}
}