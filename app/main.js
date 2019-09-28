import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux' 
import store from '../store/store'
import apollo_client from './apollo_client'

export const client = apollo_client()

if(localStorage.getItem("token")) localStorage.removeItem("token")

ReactDOM.render(    
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("app")
);
