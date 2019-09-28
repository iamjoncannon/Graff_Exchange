import actions from "./action_constants_for_User"

const login = (payload) => {
      	return {
      		type: actions.LOGIN,
      		payload
      	}
      }

const LogOut = (payload) => {
      	return {
      		type: actions.LOGOUT,
      		payload
      	}
      }

export default {
	login,
	LogOut,
}