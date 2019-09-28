import React from 'react';
import { blurb, logoUrl } from './utils'
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
          password : "password",
          confirm_password: "",
          submitted: false,
          server_landing_page_error: true, 
          local_landing_page_error: null  
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

  componentDidUpdate(){

    if(this.props.server_landing_page_error && this.state.submitted){

      this.setState({submitted: false, 
                     server_landing_page_error: true
                    })
    }
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

  handleSubmit = (evt) => {

      if(evt){

        evt.preventDefault()
        evt.stopPropagation()
      }

      let { firstName, lastName, email, password } = this.state

      // validate email

      const re = /\S+@\S+\.\S+/;

      if(!re.test(email)){

        this.setState({local_landing_page_error: "Invalid Email"}) 
        setTimeout(()=> this.setState({local_landing_page_error: null}), 5000) 
        return 
      }
      
      if(password === ""){

        this.setState({local_landing_page_error: "Invalid Password"}) 
        setTimeout(()=> this.setState({local_landing_page_error: null}), 5000) 
        return 
      }

      if(this.state.mode === "sign-in"){

        this.props.handleLogin(email, password)
      }

      if(this.state.mode === "sign-up"){

        // validate that passwords match

        if(password !== this.state.confirm_password){

          this.setState({local_landing_page_error: "Passwords do not match"}) 
          setTimeout(()=> this.setState({local_landing_page_error: null}), 5000) 

          return 
        }

        this.props.handleRegister(firstName, lastName, email, password)
      }

      this.setState({submitted: true, server_landing_page_error: true})
  }

  handleMode = (mode) => {

    this.setState( { mode: mode, server_landing_page_error: false, local_landing_page_error: null } )
  }

  render() {

    const isDesktop = window.innerWidth > 1100;

    const { mode, local_landing_page_error } = this.state
    
    // this.state is a boolean- don't display if user switches between screens 
    const server_landing_page_error = this.state.server_landing_page_error && this.props.server_landing_page_error
    
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
                Graff Exchange
              </span>

              <span className="blurb">

                {blurb}
                
              </span>
              
              <img src={logoUrl} />

              {!isDesktop &&

                <div className="sign-btns">

                  <span 
                    className={ mode === "sign-up" ? "unselected" : undefined}
                    onClick={()=>this.handleMode("sign-in")}
                  >             
                      Sign In
                    </span>

                  <span 
                    className={ mode === "sign-in" && !isDesktop ? "unselected" : undefined}
                    onClick={()=>this.handleMode("sign-up")}
                  >
                    Sign Up
                  </span>

                </div>
              }

              {isDesktop && mode === "sign-up" && 

                  <div className="sign-btns">
                    
                      <span > Already have an account? </span> 

                    
                      <span 
                        onClick={()=>this.handleMode("sign-in")}
                      >             
                          Sign In
                      </span> 
                  </div>
            }

            { isDesktop && mode == "sign-in" && 

              <div className="sign-btns">

                <span>Don't have an account? </span> 

                <span 
                  onClick={()=>this.handleMode("sign-up")}
                >
                  Sign Up
                </span>

              </div>
            }

          </div>

          <div className="form">
          <form>

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
                type="email"
                name="email"
                required
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
                onChange={this.handleChange}
                type="password"
                name="confirm_password"              
                value={this.state.confirm_password}
              />
            </div>
          }

          <button
            onClick={ this.handleSubmit }
          >
              {
                mode === 'sign-in' && !this.state.submitted ? "Sign In" : 
                mode === 'sign-up' && !this.state.submitted ? "Sign Up" :
                this.state.submitted ? "Loading..." : ""
              }

          </button>

          { server_landing_page_error && <span className="error-message" >{this.props.server_landing_page_error}</span>}
          { local_landing_page_error && <span className="error-message" >{local_landing_page_error}</span>}
          { mode === "sign-in" && <span onClick={this.DemoAccount}>Sign into Demo Account</span> }
          </form>
          </div>      
        </div>
      );
  }
  }
}

const mapStateToProps = ({ User_state }) => {
  return {
      isLoggedIn : User_state.isLoggedIn,
      server_landing_page_error : User_state.landing_page_error
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
