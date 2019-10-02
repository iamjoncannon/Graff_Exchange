import React, { Suspense, lazy } from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux' 
import store from '../store/store'
import apollo_client from './apollo_client'

const App = lazy(() => import("./components/app"))

export const client = apollo_client()

if(localStorage.getItem("token")) localStorage.removeItem("token")

ReactDOM.render(    
  <Provider store={store}>
    <Router>
      <Suspense fallback="Loading...">
          <App />
      </Suspense>
    </Router>
  </Provider>,
  document.getElementById("app") || document.createElement('app')
);
