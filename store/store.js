import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import combinedReducers from './combine_reducers'

let middleware 

if(process.env.NODE_ENV === "production"){

  middleware = composeWithDevTools(

    applyMiddleware(thunkMiddleware)
  )
}
else{

  middleware = composeWithDevTools( 
    applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
  )
}

export default createStore(combinedReducers, middleware)
