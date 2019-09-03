import React from 'react';
import { logoUrl } from './utils'
import { Link } from 'react-router-dom'

export default function MainNav (props){

  const { path } = props.match;

  const isDesktop = window.innerWidth > 1100;

  console.log(props)

  return (


    <div className="main-nav">

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
};