import React from 'react';
import Footer from './Footer'

const logoUrl = "https://png2.cleanpng.com/sh/ff9084e417b3bcc3e44546e48badd691/L0KzQYm3V8MyN6RnkZH0aYP2gLBuTfdweJlqip9tb3PudcO0gB9ueKZ5feQ2cILyd8Pojf1qdpgye954aoX1dX68gsYxapRnetZrMEnmRXA4U8A4QWQ5SKMAM0OzRoe7Usc5QWg3RuJ3Zx==/kisspng-gopher-docker-computer-programming-clojure-5b60bcbbdb09c5.1307934015330664278972.png"

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