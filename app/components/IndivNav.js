import React from 'react';
import { isDesktop, isCell, isTab } from './utils'
import { Link } from 'react-router-dom'
import IndivSelector from './IndivSelector'
import TradeBox from './TradeBox'

export default class IndivNav2 extends React.Component {
 
  constructor(props) {
    super(props);

    this.state = {

        isModalShowing : false,
        whichModal : null // options || tradeBox
    }
  }
  
  closeModal = () => {

    this.setState({ isModalShowing : false })
  }

  render() {

    const {isModalShowing, whichModal} = this.state

    const { pathname } = this.props.location

    return (

    <div style={{height: "100vh"}}>
      
      <div className="individual-nav">
  
        { isCell() ? 
       
          <i className="fas fa-bars fa-7x" 
             onClick={()=>this.setState({isModalShowing: true, whichModal: 'selector'})}
          />
          :
          <div style={{width: "7vw"}}></div>
        
        }

        <div>
  
          <span>AAPL</span> 
  
          
          { !isDesktop() && 
          
            <i className="fas fa-angle-down fa-7x" />
          }
  
        </div>
  
        <span     
          onClick={()=>this.setState({isModalShowing: true, whichModal: 'trade-box'})}
        >
          Trade
        </span>
      
      </div>
      {
        !isCell() &&
        
        <div className="selector">
        
          <IndivSelector 
            pathname={pathname} 
            exit={()=>{}}
          />
          
        </div>
      
      }

      {
        isModalShowing && 

        <div className="modal-container" onClick={()=>this.setState({isModalShowing: false})}>

          <div onClick={ (e)=> e.stopPropagation() } className={whichModal}>
            
              { whichModal === 'selector' ? 

                <IndivSelector 
                  pathname={pathname} 
                  exit={this.closeModal}
                />

                : 
                
                <TradeBox  
                  exit={this.closeModal}
                />
              }
          </div>
        </div>
      }

    </div>
    );
  }
}
