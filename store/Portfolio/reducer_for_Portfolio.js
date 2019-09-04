import actions from "./action_constants_for_PORTFOLIO"

const initialState = {
  PortfolioList : [],
  isLoading: false,
  SinglePortfolio: {
    Holdings: '',
  }
}

export default function Portfolio_reducer (state = initialState, action) {
  
  switch (action.type) {

    case actions.HYDRATEPORTFOLIO: {

      return { ...state }
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
    
    default:
      return state
  }
}