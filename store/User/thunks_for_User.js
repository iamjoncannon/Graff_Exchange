import actions from "./actions_for_User"
import { client } from '../../app/main'
import gql from 'graphql-tag'

export const loginThunk = (email, password) => async dispatch => {

  const query = gql`query login_call($email: String, $password: String) {

    login(email: $email, password: $password){
      email
      first_name
      last_name 
      token
      balance
      holdings {
        symbol
        current_holding
        
      }
    }
  }`

  let variables = { email, password }

  let response

  try {

    let { data : { login } } = await client.query({ query, variables })
    
    response = login
  }
  catch(error){

    console.log(error)
  }
  
  dispatch(actions.login(response))
 
};

export const registerThunk = ( first_name, last_name, email, password ) => async dispatch => {
  
  const mutation = gql`mutation sign_up_call($input: sign_up_input) {

    sign_up(input: $input) {
      first_name,
      last_name,
      email,
      token,
      balance
    }
  }`

  let variables = { input : { first_name, last_name, email, password } }

  let response

  try {

    let { data : { sign_up } } = await client.mutate({ mutation, variables })
    
    response = sign_up
  }
  catch(error){

    console.log(error)
  }
  
  dispatch(actions.login(response))
};

export default {
	loginThunk,
	registerThunk,
}