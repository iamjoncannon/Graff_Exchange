import React from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom'
import { isDesktop, isCell, isTab } from '../utils'
import IndivSelector from './IndivSelector'
import TradeBox from './TradeBox'
import { hydrateSinglePortfolioPage } from "../../../store/Portfolio/thunks_for_Portfolio.js"

// this component will manage hydrating data
// for the individual stock section

class IndivNav extends React.Component {
 
  constructor(props) {
    super(props);

    this.state = {
        whichItem: null,
        isModalShowing : false,
        whichModal : null // options || tradeBox
    }
  }

  componentDidMount(){
        
      this.setState({
          whichItem : this.props.selectedPortfolioItem.symbol
      })

      this.updateData()
  }

  componentDidUpdate(){

      if(this.props.selectedPortfolioItem.symbol !== this.state.whichItem){
          
          this.setState({
              whichItem: this.props.selectedPortfolioItem.symbol
          })

          this.updateData()
      }
  }

  updateData(){

      const { selectedPortfolioItem, token } = this.props

      this.props.hydrateSinglePortfolioPage(token, selectedPortfolioItem)

  }

  closeModal = () => {

    this.setState({ isModalShowing : false })
  }

  render() {

    const {isModalShowing, whichModal} = this.state

    const { pathname } = this.props.location
    const {selectedPortfolioItem} = this.props

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

const mapStateToProps = ({ Portfolio_state, User_state }) => {
  return {
    token: User_state.token,
    selectedPortfolioItem: Portfolio_state.selectedPortfolioItem
  };
};

const mapDispatchToProps = dispatch => ({
  hydrateSinglePortfolioPage: (...args) => dispatch(hydrateSinglePortfolioPage(...args)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IndivNav);