import React from 'react';
import { logoUrl } from './utils'

export default class Landing extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {
      mode : 'sign-in'
    }
  }

  componentDidMount(){

  }

  render() {

    const isDesktop = window.innerWidth > 1100;

    const { mode } = this.state

    document.body.style.backgroundColor = "#F9FAFB" 
    
    // the background needs to be cream for the desktop to seem inset
    // ...but only for this page

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
                  className={ mode === "sign-up" && "unselected"}
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
              />

            </div>
          }
          
          {
            mode === "sign-up" &&

            <div>

              <span>Last Name</span>

              <input 
                type="text"
              />

            </div>         
          }

          <div>

            <span>Email</span>

            <input 
              type="text"
            />
          </div>

          <div>

            <span>Password</span>

            <input 
              
              type="password"
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

        <button>
            {mode === 'sign-in' ? "Sign In" : "Sign Up"}
        </button>

        {mode === "sign-in" && <span>Sign into Demo Account</span> }
        
        </div>      
      </div>
    );
  }
}