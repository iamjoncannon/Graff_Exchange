import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import combinedReducers from './combine_reducers'

const middleware = composeWithDevTools(
  
  // applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
  applyMiddleware(thunkMiddleware)
)

export default createStore(combinedReducers, middleware)