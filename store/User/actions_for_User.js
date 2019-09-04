import actions from "./action_constants_for_User"

const login = (payload) => {
      	return {
      		type: actions.LOGIN,
      		payload
      	}
      }

const register = (payload) => {
      	return {
      		type: actions.REGISTER,
      		payload
      	}
      }

const logout = (payload) => {
      	return {
      		type: actions.LOGOUT,
      		payload
      	}
      }

export default {
	login,
	register,
	logout,
}