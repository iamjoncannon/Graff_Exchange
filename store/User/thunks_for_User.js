import { isCell } from '../../app/components/utils'
import actions from "./actions_for_User"
import { client } from '../../app/main'
import gql from 'graphql-tag'

export const loginThunk = (email, password) => async dispatch => {

  const OHLC_data = `ohlc_data {
                      latestPrice
                      companyName
                      change
                      changePercent
                      open
                    }`

  const full_query = `login(email: $email, password: $password){
    email
    first_name
    last_name 
    token
    balance
    holdings {
      user_data {
        symbol
        current_holding
      }
      ${ isCell() ? OHLC_data : ``}
    }
    transaction_history{
      id
      type
      symbol
      quantity
      price
      date_conducted
    }
  }
  `  

  const query = gql`query login_call($email: String, $password: String) {
    ${full_query}
  }`

  let variables = { email, password }

  let response

  try {

    let { data : { login } } = await client.query({ query, variables })
    
    response = login

    localStorage.setItem("token", response.token)
  }
  catch(error){

    response = error 

    console.log(error)
  }
  
  dispatch(actions.login(response))
};

export const registerThunk = ( first_name, last_name, email, password ) => async dispatch => {
  
  const mutation = gql`mutation sign_up_call($input: sign_up_input) {

    sign_up(input: $input){
      email
      first_name
      last_name 
      token
      balance
      holdings {
        user_data {
          symbol
          current_holding
        }
        ohlc_data {
          latestPrice
          companyName
          change
          changePercent
          open
        }
      }
      transaction_history{
        id
        type
        symbol
        quantity
        price
        date_conducted
      }
    }
  }`

  let variables = { input : { first_name, last_name, email, password } }

  let response

  try {

    let { data : { sign_up } } = await client.mutate({ mutation, variables })
    
   
    response = sign_up
  }
  catch(error){
    response = error 
    console.error(error)
  }

  localStorage.setItem("token", response.token)
  
  dispatch(actions.login(response))
};

export default {
	loginThunk,
	registerThunk,
}