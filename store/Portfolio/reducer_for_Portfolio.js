import actions from "./action_constants_for_PORTFOLIO"
import User_actions from "../User/action_constants_for_User"

/*

  NB- "portfolio" corresponds to [ Holding ] 
  in GraphQL type_defs

*/

const initialState = {
  selectedPortfolioItem: { },
  portfolio: {},
  transactionHistory: { }
}

export default function Portfolio_reducer (state = initialState, action) {
  
  switch (action.type) {

    case User_actions.LOGIN: {
      
      // converting [ Holding ] to an object, where 
      // the key is the symbol and value is the item
      // in the array 

      const restructured_portfolio_data = {}

      for( let holding of action.payload.holdings){
        restructured_portfolio_data[holding.symbol] = holding

        // this needs to get migrated to a resolver for a "data"
        // object - ideally it would also be renamed 

        restructured_portfolio_data[holding.symbol].data = {}
      }

      return { ...state, portfolio : restructured_portfolio_data }
    }

    case actions.HYDRATEPORTFOLIO: {

      let { selectedPortfolioItem } = state 

      let { portfolio, transactionHistory } = action.payload

      // if no stock selected, default to the first stock in the portfolio
      let newSelectedPortfolioItem = ( !Object.keys(state.selectedPortfolioItem).length && Object.keys(portfolio).length) ? portfolio[Object.keys(portfolio)[0]] : selectedPortfolioItem ;

      return { portfolio, transactionHistory, selectedPortfolioItem : newSelectedPortfolioItem }
    }
    
    case actions.MAKETRADE: {

      let { symbol, trade, transactionHistory } = action.payload

      let updatedPortfolio = {...state.portfolio }
      
      if(!updatedPortfolio[symbol]){

        updatedPortfolio[symbol] = { symbol: symbol, quantity: trade[1], data: trade.data }

        return { ...state, 
                 portfolio: updatedPortfolio, 
                 selectedPortfolioItem : Object.keys(state.selectedPortfolioItem).length === 0 ? updatedPortfolio[symbol] : state.selectedPortfolioItem
                }
      
      }
      else{

        updatedPortfolio[symbol]["quantity"] = trade[1]
        
        return { ...state, 
                 portfolio: updatedPortfolio, 
                 transactionHistory: transactionHistory,
                 selectedPortfolioItem: updatedPortfolio[symbol]  
               }
      }

    }
    
    case actions.GETONEPRICE: {

      return { ...state }
    }
    
    case actions.GETOPENINGPRICE: {

      return { ...state }
    }
    
    case actions.HANDLESOCKETMESSAGE: {

      const stock = action.payload

      let updatedPortfolio = {...state.portfolio } 

      updatedPortfolio[stock.symbol]["price"] = stock.price

      return { ...state, portfolio: updatedPortfolio }
    }
    
    case actions.HANDLENEWS: {

      const { symbol, data } = action.payload
      
      let updatedPortfolio = { ...state.portfolio}

      let newSelectedPortfolioItem = { ...state.selectedPortfolioItem }
      
      updatedPortfolio[symbol]["news"] = data.data;
  
      if(symbol === state.selectedPortfolioItem.symbol){
        
        newSelectedPortfolioItem["news"] = data.data;
      }
  
      return { ...state, portfolio: updatedPortfolio, selectedPortfolioItem : newSelectedPortfolioItem }
    }
    
    case actions.HANDLEFINANCIALS: {

      const {symbol, financials } = action.payload

      let updatedPortfolio = { ...state.portfolio}

      let newSelectedPortfolioItem = { ...state.selectedPortfolioItem }

      updatedPortfolio[symbol]["financials"] = financials
      
      if(symbol === state.selectedPortfolioItem.symbol){
        
        newSelectedPortfolioItem["financials"] = financials
      }
  
      return { ...state, portfolio: updatedPortfolio, selectedPortfolioItem : newSelectedPortfolioItem }      
    }
    
    case actions.HANDLEHISTORICALPRICE: {

      const { symbol, historical } = action.payload
      
      let updatedPortfolio = { ...state.portfolio }

      let newSelectedPortfolioItem = { ...state.selectedPortfolioItem }

      updatedPortfolio[symbol]["historical"] = historical;

      if(symbol === state.selectedPortfolioItem.symbol){
        
        newSelectedPortfolioItem["historical"] = historical;
      }
  
      return { ...state, portfolio: updatedPortfolio, selectedPortfolioItem : newSelectedPortfolioItem }
    }
    
    case actions.HANDLESYMBOLSELECT: {

      const nextSelect = state.portfolio[action.payload]

      return { ...state, selectedPortfolioItem : nextSelect }
    }

    case User_actions.LOGOUT: {

      return initialState
    }
    
    default:
      return state
  }
}