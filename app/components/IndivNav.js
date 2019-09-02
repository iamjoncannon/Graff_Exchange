import React from 'react';
import { isDesktop, isCell } from './utils'
import { Link } from 'react-router-dom'
import IndivSelector from './IndivSelector'

export default class IndivNav2 extends React.Component {
 
  constructor(props) {
    super(props);

    this.state = {

        isModalShowing : false,
        whichModal : null // options || tradeBox
    }
  }

  render() {

    const {isModalShowing, whichModal} = this.state

    const { pathname } = this.props.location

    return (

    <div style={{height: "100vh"}}>
      
      <div className="individual-nav">
  
        { !isCell() ? 
          <div className="section-selector"> 
  
            <Link to="/indiv/fin">
                  Financials
            </Link>
          
            
          </div> 
          
          : 
        
          <i className="fas fa-bars fa-7x" 
              onClick={()=>this.setState({isModalShowing: true, whichModal: 'selector'})}
          />
        
        }

        <div>
  
          <span>AAPL</span> 
  
          
          { !isDesktop() && 
          
            <i className="fas fa-angle-down fa-7x" />
          }
  
        </div>
  
        <span>Trade</span>
      
      </div>



      {
        isModalShowing && 

        <div className="modal-container" onClick={()=>this.setState({isModalShowing: false})}>

          <div onClick={ (e)=> e.stopPropagation() } className={whichModal}>
            
              { whichModal === 'selector' ? 

                <IndivSelector 
                  pathname={pathname} 
                  exit={()=> this.setState({ isModalShowing : false }) }
                />

                : 
                <span> trade box </span>
              }

          </div>

        </div>
      }
    </div>
    );
  }
}
