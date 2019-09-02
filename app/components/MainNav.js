import React from 'react';
import { logoUrl } from './utils'

export default function MainNav (props){

  const { } = props;

  const isDesktop = window.innerWidth > 1100;

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

        <i className={`fas fa-chart-bar fa-${isDesktop ? "2" : "7"}x`} />

        <img src={logoUrl} />
        
        <i className={`fas fa-home fa-${isDesktop ? "2" : "7"}x`} />
      
      </div>

    </div>

  );
};