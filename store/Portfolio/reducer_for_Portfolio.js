import actions from "./action_constants_for_PORTFOLIO"
import User_actions from "../User/action_constants_for_User"

/*

  NB- "portfolio" corresponds to [ Holding ] 
  in GraphQL type_defs

*/

const initialState = {
  selectedPortfolioItem: { },
  portfolio: {},
  transactionHistory: { },
  token_error: false 
}

export default function Portfolio_reducer (state = initialState, action) {
  
  switch (action.type) {

    case User_actions.LOGIN: {

      // invalid token from server 
      if(action.payload=== "Context creation failed: token invalid: "){

        return {...state, token_error: true}
      }

      if(action.payload.graphQLErrors) return {...state}
      
      // converting [ Holding ] to an object, where 
      // the key is the symbol and value is the item
      // in the array 

      const restructured_portfolio_data = {}

      for( let holding of action.payload.holdings){
        
        restructured_portfolio_data[holding.user_data.symbol] = {...holding.user_data, data: holding.ohlc_data }
      }
      
      // if no stock selected, default to the first stock in the portfolio

      let newSelectedPortfolioItem =  Object.keys(restructured_portfolio_data)[0] 

      return { ...state, 
               selectedPortfolioItem : newSelectedPortfolioItem,
               portfolio : restructured_portfolio_data, 
               transactionHistory: action.payload.transaction_history }
    }

    case actions.HYDRATEPORTFOLIO: {

      // invalid token from server 
      if(action.payload=== "Context creation failed: token invalid: "){

        return {...state, token_error: true}
      }

      const restructured_portfolio_data = {...state.portfolio}
      
      for( let holding of action.payload.holdings){
        
        restructured_portfolio_data[holding.user_data.symbol] = { ...restructured_portfolio_data[holding.user_data.symbol], data: holding.ohlc_data }
      }

      return { ...state, 
        portfolio : restructured_portfolio_data
      }
    }
    
    case actions.MAKETRADE: {

      // update the holding of the stock

      let { transaction_result: { symbol, new_holding, transaction } } = action.payload 

      let updatedPortfolio = {...state.portfolio }

      if(!updatedPortfolio[symbol]) updatedPortfolio[symbol] = { symbol, data: action.payload.ohlc_data }

      updatedPortfolio[symbol].current_holding = new_holding

      // push the transaction into the transaction history 

      const newTransactionHistory = [...state.transactionHistory, transaction]
      
      return { ...state, 
                portfolio: updatedPortfolio, 
                transactionHistory: newTransactionHistory,
                selectedPortfolioItem: symbol  
              }         
    }
    
    case actions.HANDLESOCKETMESSAGE: {

      const stock = action.payload

      let updatedPortfolio = {...state.portfolio } 

      updatedPortfolio[stock.symbol]["price"] = stock.price

      return { ...state, portfolio: updatedPortfolio }
    }
    
    case actions.HANDLENEWS: {

      const { news, symbol } = action.payload 

      let updatedPortfolio = { ...state.portfolio}
    
      updatedPortfolio[symbol]["news"] = news
  
      return { ...state, portfolio: updatedPortfolio }
    }
    
    case actions.HANDLEFINANCIALS: {

      const { symbol, quarterly_financials } = action.payload

      let updatedPortfolio = { ...state.portfolio}

      updatedPortfolio[symbol]["financials"] = quarterly_financials
        
      return { ...state, portfolio: updatedPortfolio }      
    }
    
    case actions.HANDLEHISTORICALPRICE: {

      const { symbol, historical } = action.payload
      
      let updatedPortfolio = { ...state.portfolio }

      updatedPortfolio[symbol]["historical"] = historical;
  
      return { ...state, portfolio: updatedPortfolio }
    }
    
    case actions.HANDLESYMBOLSELECT: {

      return { ...state, selectedPortfolioItem : action.payload }
    }

    case User_actions.LOGOUT: {

      return initialState
    }
    
    default:
      return state
  }
}