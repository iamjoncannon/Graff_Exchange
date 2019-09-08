import actions from "./action_constants_for_PORTFOLIO"
import User_actions from "../User/action_constants_for_User"

const initialState = {
  selectedPortfolioItem: null,
  portfolio: { },
  transactionHistory: { }
}

export default function Portfolio_reducer (state = initialState, action) {
  
  switch (action.type) {

    case actions.HYDRATEPORTFOLIO: {

      let {selectedPortfolioItem} = state 

      const { portfolio, transactionHistory } = action.payload
      
      let newSelectedPortfolioItem = selectedPortfolioItem === null ? portfolio[Object.keys(portfolio)[0]] : selectedPortfolioItem ;

      return { portfolio, transactionHistory, selectedPortfolioItem : newSelectedPortfolioItem }
    }
    
    case actions.MAKETRADE: {

      let { symbol, trade, transactionHistory } = action.payload

      let updatedPortfolio = {...state.portfolio }
      
      if(!updatedPortfolio[symbol]){

        updatedPortfolio[symbol] = { symbol: symbol, data: {}}
        return { ...state, portfolio: updatedPortfolio }
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

      const {symbol, data } = action.payload
      let updatedPortfolio = { ...state.portfolio}

      updatedPortfolio[symbol]["news"] = data.data;
  
      return { ...state, portfolio: updatedPortfolio }
    }
    
    case actions.HANDLEFINANCIALS: {

      const {symbol, financials } = action.payload

      let updatedPortfolio = { ...state.portfolio}

      updatedPortfolio[symbol]["financials"] = financials
  
      return { ...state, portfolio: updatedPortfolio }
    }
    
    case actions.HANDLEHISTORICALPRICE: {

      const {symbol, historical } = action.payload
      
      let updatedPortfolio = { ...state.portfolio}

      updatedPortfolio[symbol]["historical"] = historical;
  
      return { ...state, portfolio: updatedPortfolio }
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