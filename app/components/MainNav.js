import React from 'react';
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

    this.props.hydratePortfolio(this.props.token)
  }

  render(){

    const { pathname } = this.props.location;

    return (

      <div className="main-nav">

          <Socket />

        { isDesktop && 
    
          <div className="desk-nav">
              <span>Gopher Exchange</span>
              {/* <span>Account</span> */}
              <span onClick={this.props.LogOut}>Log Out</span>
          </div> 
        }

        <div className="all-screens">
          
          <Link to="/all/watchlist">

            <i className={`fas fa-home fa-${isDesktop ? "2" : "7"}x ${ pathname.includes("/all") ? "selected" : ""}`} />
            {isDesktop && <span>Portfolio</span>}
          </Link>

          <img src={logoUrl} />
          
          <Link to="/indiv/perf">

            {isDesktop && <span>Holdings</span>}          
            <i className={`fas fa-chart-bar fa-${isDesktop ? "2" : "7"}x ${ pathname.includes("/indiv") ? "selected" : ""}`} />
          </Link>

        </div>

      </div>

    );
  }

};

const mapStateToProps = ({ User_state, Nav_state }) => {
  
  return {
    token: User_state.token,
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