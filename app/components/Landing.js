import React from 'react';
import { logoUrl } from './utils'
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { loginThunk, registerThunk } from "../../store/User/thunks_for_User.js";

class Landing extends React.Component {
 
  constructor(props){

      super(props)
      
      this.state = {
          mode : 'sign-in',
          firstName: "Webster",
          lastName: "Ross",
          email : "webster@ross.com",
          password : "password"
      }
  }

  componentDidMount(){

    // the background needs to be cream for the desktop to seem inset
    // ...but only for this page

    document.body.style.backgroundColor = "#F9FAFB" 
  }

  componentWillUnmount(){

    document.body.style.backgroundColor = 'white' 
  }

  DemoAccount = () => {

    this.setState({
          mode : 'sign-in',
          email : "webster@ross.com",
          password : "password"
    })

    setTimeout(()=>this.handleSubmit(), 50)
  }

  handleChange = (evt) => {

      this.setState({
          [evt.target.name]:evt.target.value
      })
  }

  handleSubmit = () => {

      let { firstName, lastName, email, password } = this.state

      if(this.state.mode === "sign-in"){

        this.props.handleLogin(email, password)
      }

      if(this.state.mode === "sign-up"){
        
        this.props.handleRegister(firstName, lastName, email, password)
      }
  }

  render() {

    const isDesktop = window.innerWidth > 1100;

    const { mode } = this.state
    
    if(this.props.isLoggedIn){
        
        return (
            <Redirect to="/all/watchlist" />
        )
    }
    else {

      return (

        <div className={ isDesktop && mode === "sign-up" ? "landing landing-rev" : "landing"} >

          <div className="header">

              <span className="title">
                Gopher Exchange
              </span>

              <span className="blurb">

                Gopher Exchange, a real-time stock portfolio dashboard powered by React, Redux, Socket.io, Sass, Golang, Redis, and PostgreSQL.
              </span>
              
              <img src={logoUrl} />

              {!isDesktop &&

                <div className="sign-btns">

                  <span 
                    className={ mode === "sign-up" ? "unselected" : undefined}
                    onClick={()=>this.setState({mode: "sign-in"})}
                  >             
                      Sign In
                    </span>

                  <span 
                    className={ mode === "sign-in" && !isDesktop && "unselected"}
                    onClick={()=>this.setState({mode: "sign-up"})}
                  >
                    Sign Up
                  </span>

                </div>
              }

              {isDesktop && mode === "sign-up" && 

                  <div className="sign-btns">
                    
                      <span > Already have an account? </span> 

                    
                      <span 
                        onClick={()=>this.setState({mode: "sign-in"})}
                      >             
                          Sign In
                      </span> 
                  </div>
            }

            { isDesktop && mode == "sign-in" && 

              <div className="sign-btns">

                <span>Don't have an account? </span> 

                <span 
                  onClick={()=>this.setState({mode: "sign-up"})}
                >
                  Sign Up
                </span>

              </div>
            }

          </div>

          <div className="form">

            {
              mode === "sign-up" &&

              <div>

                <span>First Name</span>

                <input 
                  type="text"
                  name="firstName"
                  value={this.state.firstName}
                  onChange={this.handleChange} 
                />

              </div>
            }
            
            {
              mode === "sign-up" &&

              <div>

                <span>Last Name</span>

                <input 
                  type="text"
                  name="lastName"
                  value={this.state.lastName}
                  onChange={this.handleChange} 
                />

              </div>         
            }

            <div>

              <span>Email</span>

              <input
                type="text"
                name="email"
                value={this.state.email}
                onChange={this.handleChange} 
              />

            </div>

            <div>

              <span>Password</span>

              <input 
                onChange={this.handleChange}
                type="password"
                name="password"
                value={this.state.password}
              />

            </div>

          {

            mode === "sign-up" && 

            <div>

              <span>Confirm Password</span>

              <input 
                
                type="password"
              />
            </div>
          }

          <button
            onClick={ this.handleSubmit }
          >
              {mode === 'sign-in' ? "Sign In" : "Sign Up"}
          </button>

          { mode === "sign-in" && <span onClick={this.DemoAccount}>Sign into Demo Account</span> }
          
          </div>      
        </div>
      );
  }
  }
}

const mapStateToProps = ({ User_state }) => {
  return {
      isLoggedIn : User_state.isLoggedIn
  };
};

const mapDispatchToProps = dispatch => ({

    handleLogin: (email, password) => dispatch(loginThunk(email, password)),
    handleRegister: (...args) => dispatch(registerThunk(...args)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Landing);
