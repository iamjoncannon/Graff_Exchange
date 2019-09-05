import actions from "./action_constants_for_PORTFOLIO"

const initialState = {
  selectedPortfolioItem: null,
  portfolio: {},
  transactionHistory: {}
}

export default function Portfolio_reducer (state = initialState, action) {
  
  switch (action.type) {

    case actions.HYDRATEPORTFOLIO: {

      const { portfolio, transactionHistory } = action.payload
      
      let selectedPortfolioItem = !state.selectedPortfolioItem ? portfolio[Object.keys(portfolio)[0]] : selectedPortfolioItem ;

      return { portfolio, transactionHistory, selectedPortfolioItem }
    }
    
    case actions.MAKETRADE: {

      return { ...state }
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
    
    default:
      return state
  }
}