import actions from "./actions_for_User"
import axios from 'axios'
import { urlPrefix } from '../../secrets'
import { client } from '../../app/main'
import gql from 'graphql-tag'
import { sign } from "crypto"

export const loginThunk = (email, password) => async dispatch => {

  let res 

  try{
    
    res = await axios.post( (urlPrefix + '/login'), { email, password} )

  }
  catch(error){

      alert(error.response.data.message)
  }
  
  dispatch(actions.login(JSON.parse(res.data)))


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