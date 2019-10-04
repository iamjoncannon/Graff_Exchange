import React, { Suspense, lazy } from 'react';
import { connect } from "react-redux";
import { logoUrl } from './utils'
import { Link } from 'react-router-dom'
import Socket from './Socket'
import { isDesktop } from './utils'
import { hydratePortfolioThunk } from "../../store/Portfolio/thunks_for_Portfolio.js"
import UserActions from "../../store/User/actions_for_User.js"

// since the main nav gets mounted 
// when the user logs in, and its mounted
// through the application workflow, it will
// be used to retrieve initial data and will
// host the socket

class MainNav extends React.Component {
 
  constructor(props){
      super(props)

  } 

  componentDidMount(){

    const { token, hydratePortfolio } = this.props
    
    hydratePortfolio(token)
  }

  render(){

    const { pathname } = this.props.location;

    return (

      <div className="main-nav">

            <Socket />

        { isDesktop && 
    
          <div className="desk-nav">
              <span>Graff Exchange</span>
              <span>{this.props.Name}</span>
              <span>Balance: ${Number(this.props.Balance).toFixed(2)}</span>
              <span onClick={this.props.LogOut}>Log Out</span>
          </div> 
        }

        <div className="all-screens">
          
          <Link to="/all/watchlist">

            <i className={`fas fa-home fa-${isDesktop ? "2" : "7"}x ${ pathname.includes("/all") ? "selected" : ""}`} />

            {isDesktop() && <span>Portfolio</span>}
          
          </Link>

          <img src={logoUrl} />
          
    
            <Link to={ Object.keys(this.props.portfolio).length > 0 ? "/indiv/perf" : "/all/watchlist"}>

              {isDesktop() && <span>Holdings</span>}   

              <i className={`fas fa-chart-bar fa-${isDesktop ? "2" : "7"}x ${ pathname.includes("/indiv") ? "selected" : ""}`} />
            
            </Link>
 

        </div>

      </div>

    );
  }

};

const mapStateToProps = ({ User_state, Portfolio_state }) => {
  
  return {
    Name: User_state.Name,
    Balance: User_state.balance,
    token: User_state.token,
    portfolio: Portfolio_state.portfolio
  };

};

const mapDispatchToProps = dispatch => ({
  LogOut : () => dispatch(UserActions.LogOut()),
  hydratePortfolio: (token) => dispatch(hydratePortfolioThunk(token)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainNav);