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

      let { selectedPortfolioItem } = state 
      
      // converting [ Holding ] to an object, where 
      // the key is the symbol and value is the item
      // in the array 

      const restructured_portfolio_data = {}

      for( let holding of action.payload.holdings){

        restructured_portfolio_data[holding.user_data.symbol] = {...holding.user_data, data: holding.ohlc_data }
      }

      // if no stock selected, default to the first stock in the portfolio

      let newSelectedPortfolioItem = ( !Object.keys(state.selectedPortfolioItem).length && Object.keys(restructured_portfolio_data).length ) ? 
                                        restructured_portfolio_data[Object.keys(restructured_portfolio_data)[0]] : 
                                        selectedPortfolioItem ;

      return { ...state, 
               selectedPortfolioItem : newSelectedPortfolioItem,
               portfolio : restructured_portfolio_data, 
               transactionHistory: action.payload.transaction_history }
    }

    case actions.HYDRATEPORTFOLIO: {

      let { selectedPortfolioItem } = state 

      let { portfolio, transactionHistory } = action.payload

      let newSelectedPortfolioItem = ( !Object.keys(state.selectedPortfolioItem).length && Object.keys(portfolio).length ) ? portfolio[Object.keys(portfolio)[0]] : selectedPortfolioItem ;

      return { portfolio, transactionHistory, selectedPortfolioItem : newSelectedPortfolioItem }
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
                selectedPortfolioItem: updatedPortfolio[symbol]  
              }         
    }
    
    case actions.HANDLESOCKETMESSAGE: {

      const stock = action.payload

      let updatedPortfolio = {...state.portfolio } 

      updatedPortfolio[stock.symbol]["price"] = stock.price

      return { ...state, portfolio: updatedPortfolio }
    }
    
    case actions.HANDLENEWS: {

      const { symbol, news } = action.payload
      
      let updatedPortfolio = { ...state.portfolio}

      let newSelectedPortfolioItem = { ...state.selectedPortfolioItem }
      
      updatedPortfolio[symbol]["news"] = news;
  
      if(symbol === state.selectedPortfolioItem.symbol){
        
        newSelectedPortfolioItem["news"] = news;
      }
  
      return { ...state, portfolio: updatedPortfolio, selectedPortfolioItem : newSelectedPortfolioItem }
    }
    
    case actions.HANDLEFINANCIALS: {

      const {symbol, quarterly_financials } = action.payload

      let updatedPortfolio = { ...state.portfolio}

      let newSelectedPortfolioItem = { ...state.selectedPortfolioItem }

      updatedPortfolio[symbol]["financials"] = quarterly_financials
      
      if(symbol === state.selectedPortfolioItem.symbol){
        
        newSelectedPortfolioItem["financials"] = quarterly_financials
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