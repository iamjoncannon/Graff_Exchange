import actions from "./action_constants_for_USER"
import Portfolio_actions from "../Portfolio/action_constants_for_PORTFOLIO"

const initialState = {
  balance: "",
  email: "",
  first_name: "",
  last_name: "",
  token: '',
  isLoggedIn: false,
  landing_page_error: null
}

export default function User_reducer (state = initialState, action) {
  
  switch (action.type) {

    case actions.LOGIN: {

      // handle login /signup errors 
      if(action.payload.graphQLErrors){
         
        const invalid_user = action.payload.message.includes("unable to find user") 
        const invalid_password = action.payload.message.includes("Invalid password") 
        
        if(invalid_user){
          
          return {...state, landing_page_error: "Unable to find username"}
        }

        if(invalid_password){

          return {...state, landing_page_error: "Invalid Password"}
        }

      }
      
      localStorage.setItem("token", action.payload.token)
      
      const stripped_user_object = JSON.parse(JSON.stringify(action.payload))
      delete stripped_user_object.holdings 
      delete stripped_user_object.transaction_history 

      return {...stripped_user_object, isLoggedIn: true } 
    }
    
    case actions.LOGOUT: {

      return { isLoggedIn: false }
    }

    case Portfolio_actions.MAKETRADE: {

      return { ...state, balance :  action.payload.transaction_result.balance }
    
    }
    
    default:
      return state
  }
}