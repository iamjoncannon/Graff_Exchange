import actions from "./action_constants_for_USER"

const initialState = {
  balance: '',
  name: '',
  email: '', 
  token: "", // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6I…VyIn0.rIS_sv4nDsPc8RfiQ2XFCwaAA4Gv-gGty2e5s6FDQtU",
  isLoggedIn: false,
}

export default function User_reducer (state = initialState, action) {
  
  switch (action.type) {

    case actions.LOGIN: {

      return {...action.payload, isLoggedIn: true } 
    }
    
    case actions.REGISTER: {

      return { ...state }
    }
    
    case actions.LOGOUT: {

      return { isLoggedIn: false }
    }
    
    default:
      return state
  }
}