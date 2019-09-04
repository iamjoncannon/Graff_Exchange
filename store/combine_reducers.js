import { combineReducers } from 'redux'
import User_state from './User/reducer_for_User'
import Portfolio_state from './Portfolio/reducer_for_Portfolio'

export default combineReducers({
 User_state,
 Portfolio_state,
})