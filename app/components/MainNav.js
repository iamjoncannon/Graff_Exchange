import React from 'react';
import { connect } from "react-redux";
import { logoUrl } from './utils'
import { Link } from 'react-router-dom'
import Socket from './Socket'
import { isDesktop } from './utils'
import { hydratePortfolioThunk } from "../../store/Portfolio/thunks_for_Portfolio.js"

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

    console.log(this.props)

    this.props.hydratePortfolio(this.props.token)
  }

  render(){

    const { pathname } = this.props.location;

    console.log( "here's path in main nav", pathname )

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

            <i className={`fas fa-chart-bar fa-${isDesktop ? "2" : "7"}x ${ pathname.includes("/indiv") ? "selected" : ""}`} />
          
          </Link>

          <img src={logoUrl} />
          
          <Link to="/all/watchlist">

            <i className={`fas fa-home fa-${isDesktop ? "2" : "7"}x ${ pathname.includes("/all") ? "selected" : ""}`} />
        
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
  
  hydratePortfolio: (token) => dispatch(hydratePortfolioThunk(token)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainNav);