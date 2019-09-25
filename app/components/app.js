import React from 'react';
import { Route, withRouter, Redirect } from 'react-router-dom'
import { connect } from "react-redux";

import Landing from './Landing'
import Footer from './Footer'
import MainNav from './MainNav'

import IndivNav from './indiv/IndivNav'
import IndivPerf from './indiv/IndivPerf'
import IndivFin from './indiv/IndivFin'
import IndivNews from './indiv/IndivNews'
import IndivTrans from './indiv/IndivTrans'

import AllNav from './portfolio/AllNav'
import AllWatchlist from './portfolio/AllWatchlist'
import AllTrans from './portfolio/AllTrans'

const App = (props) => {

  // login route

  if(props.location.pathname === "/"){

    return (

      <div className="app-container">
  
        <Route exact path="/" component={Landing} />
        <Route exact path="/" component={Footer} />

      </div>

    )
  }
  else{
 
    // trying to hit logged in route 
    // but not logged in 

    if(!props.isLoggedIn){
      
      return(
        
        <Redirect to="/" />
      ) 
    }
    else{
      
      // logged in routes
      
        return (
          
          <div className="app-container">
                  
            <Route path="/" component={MainNav} />

            <Route path="/indiv" component={IndivNav} />
            <Route exact path="/indiv/perf" component={IndivPerf} />
            <Route exact path="/indiv/finan" component={IndivFin} />
            <Route exact path="/indiv/news" component={IndivNews} />
            <Route exact path="/indiv/trans" component={IndivTrans} />
            
            <Route path="/all" component={AllNav} />
            <Route exact path="/all/watchlist" component={AllWatchlist} />
            <Route exact path="/all/transactions" component={AllTrans} />

        </div>
      )
    }
  }
};

const mapStateToProps = ({ User_state }) => {
  return {
      isLoggedIn : User_state.isLoggedIn
  };
};


// vvv wrapper hell vvv

export default withRouter(connect(
  mapStateToProps,
  null
)(App))

// ^^^ wrapper hell ^^^