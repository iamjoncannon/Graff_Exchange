import React from 'react';
import { logoUrl } from './utils'
import { Link } from 'react-router-dom'
import Socket from './Socket'
import { isDesktop } from './utils'

// since the main nav gets mounted 
// when the user logs in, and its mounted
// through the application workflow, it will
// be used to retrieve initial data and will
// host the socket

export default class MainNav extends React.Component {
 
  constructor(props){
      super(props)

  } 

  componentDidMount(){


  }

  componentDidUpdate(){


  }

  componentWillUnmount(){


  }

  render(){

    const { path } = this.props.match;

    return (

      <div className="main-nav">

          <Socket />

        { isDesktop && 
    
          <div className="desk-nav">
              <span>Gopher Exchange</span>
              <span>Account</span>
              <span>Log Out</span>
          </div> 
        }

        <div className="all-screens">
          
          <Link to="/indiv/perf">

            <i className={`fas fa-chart-bar fa-${isDesktop ? "2" : "7"}x ${path === "/indiv" ? "selected" : ""}`} />
          </Link>

          <img src={logoUrl} />
          
          <Link to="/all/watchlist">

            <i className={`fas fa-home fa-${isDesktop ? "2" : "7"}x ${path === "/all" ? "selected" : ""}`} />
          </Link>
        
        </div>

      </div>

    );
  }

};