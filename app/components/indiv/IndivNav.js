import React from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom'
import { isDesktop, isCell, isTab } from '../utils'
import IndivSelector from './IndivSelector'
import TradeBox from './TradeBox'

class IndivNav extends React.Component {
 
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
    const {selectedPortfolioItem} = this.props

    console.log(selectedPortfolioItem)

    return (

      <div>

      <div className="individual-nav">
  
        { isCell() ? 
       
          <i className="fas fa-bars fa-7x" 
             onClick={()=>this.setState({isModalShowing: true, whichModal: 'selector'})}
          />
          :
          <div style={{width: isDesktop()? "3.5vw" : "7vw"}}></div>
        
        }

        <div>
  
          <span>{selectedPortfolioItem && selectedPortfolioItem.symbol}</span> 
  
          
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

const mapStateToProps = ({ Portfolio_state }) => {
  return {
    selectedPortfolioItem: Portfolio_state.selectedPortfolioItem
  };
};

export default connect(
  mapStateToProps,
  null
)(IndivNav);