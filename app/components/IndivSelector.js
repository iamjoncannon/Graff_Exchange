import React from 'react';
import { Link } from 'react-router-dom'

export default function IndivSelector (props){

  const { pathname } = props;

  function isSelectedSelector(selector){

    return pathname.includes(selector) ? "selected" : undefined ;
  }

  return (

    <div onClick={props.exit}>

      <Link to="/indiv/perf">

        <span className={isSelectedSelector("perf")}>
          Performance
        </span>          
      
      </Link>

      <Link to="/indiv/finan">

        <span className={isSelectedSelector("finan")}>
          Financials
        </span>

      </Link>

      <Link to="/indiv/news">
      
        <span className={isSelectedSelector("news")}>
          News
        </span>
      
      </Link>

      <Link to="/indiv/trans">
      
        <span className={isSelectedSelector("trans")}>
          Transactions
        </span>
      
      </Link>


    </div>
  );
};

