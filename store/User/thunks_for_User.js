import actions from "./actions_for_User"
import axios from 'axios'
import { urlPrefix } from '../../secrets'

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

export const registerThunk = () => dispatch => {
 
  return fetch('/signup')
      .then((resp) => resp.json()) 
      .then(function( {data} ) {
 
          dispatch(actions.login(data))
  });
};

export default {
	loginThunk,
	registerThunk,
}