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

export const registerThunk = (Name, Email, Password) => async dispatch => {
 
  console.log(Name, Email, Password)

  const signUpInfo = { Name, Email, Password }

  let response

  try {

    response = await axios.post(urlPrefix + '/signup', signUpInfo )

    console.log("register response: ", response)
  }
  catch(error){
    
    let  duplicateEmail = error.response.data.message === `pq: duplicate key value violates unique constraint "unique_email"`

    if (duplicateEmail){

      alert("This Email is already on file, please try again with a unique email.")
    }
    else{

      console.log(error)

    }
  }

  signUpInfo.password = null 

  let returnedToken = response.data

  dispatch(actions.login({Balance: 5000, token: returnedToken, Name, Email}))
};

export default {
	loginThunk,
	registerThunk,
}