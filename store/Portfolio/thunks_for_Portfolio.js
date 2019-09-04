import actions from "./actions_for_Portfolio"

export const hydratePortfolioThunk = () => dispatch => {
 
  return fetch('/getportfolio')
      .then((resp) => resp.json()) 
      .then(function( {data} ) {
 
          dispatch(actions.hydratePortfolio(data))
  });
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