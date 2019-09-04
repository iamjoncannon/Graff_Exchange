import React from 'react';
import DataNav from '../DataNav'
import { Link } from 'react-router-dom'

export default class AllNav extends React.Component {
 
  constructor(props) {
    super(props);

  }

  render() {

    const { pathname } = this.props.location

    return (

      <div className="all-nav">
        
        <Link to="/all/watchlist">

            <span className={pathname.includes("watchlist") ? "selected" : undefined}>
              Portfolio
            </span>   
        
        </Link>
        
        <Link to="/all/transactions">

          <span className={pathname.includes("transactions") ? "selected" : undefined}>
              Transactions
          </span>   
  
        </Link>
      </div>
    );
  }
}