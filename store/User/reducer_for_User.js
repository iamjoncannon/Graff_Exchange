import actions from "./action_constants_for_USER"
import Portfolio_actions from "../Portfolio/action_constants_for_PORTFOLIO"

const initialState = {
  balance: "",
  email: "",
  first_name: "",
  last_name: "",
  token: '',
  isLoggedIn: false,
}

export default function User_reducer (state = initialState, action) {
  
  switch (action.type) {

    case actions.LOGIN: {

      // due to graphql restructring
      
      const stripped_user_object = JSON.parse(JSON.stringify(action.payload))
      delete stripped_user_object.holdings 
      delete stripped_user_object.transaction_history 

      return {...stripped_user_object, isLoggedIn: true } 
    }
    
    case actions.REGISTER: {

      return {...action.payload, isLoggedIn: true } 
    }
    
    case actions.LOGOUT: {

      return { isLoggedIn: false }
    }

    case Portfolio_actions.MAKETRADE: {

      return { ...state, Balance :  action.payload.trade[0] }
    }
    
    default:
      return state
  }
}