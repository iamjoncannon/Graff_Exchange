import React from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom'
import { isDesktop, isCell, isTab } from '../utils'
import IndivSelector from './IndivSelector'
import TradeBox from './TradeBox'
import { hydrateSinglePortfolioPage } from "../../../store/Portfolio/thunks_for_Portfolio.js"
import actions  from '../../../store/Portfolio/actions_for_Portfolio.js'

// this component manages hydrating data
// for the individual stock section
// as well as the navigational logic of
// that section

class IndivNav extends React.Component {
 
  constructor(props) {
    super(props);

    this.state = {
        whichItem: null,
        isModalShowing : false,
        whichModal : null 
    }
  }

  hydrate_data(){

    const { selectedPortfolioItem } = this.props

    this.props.hydrateSinglePortfolioPage( selectedPortfolioItem )

  }

  componentDidMount(){

      isCell() && this.hydrate_data()
  }

  componentDidUpdate(){

    const { selectedPortfolioItem, portfolio } = this.props

    const selectedPortfolioItem_object = portfolio[selectedPortfolioItem]

    if(isCell() && !selectedPortfolioItem_object.historical){

      this.hydrate_data()
    }

  }

  closeModal = () => {

    this.setState({ isModalShowing : false })
  }

  render() {

    const { isModalShowing, whichModal } = this.state
    const { pathname } = this.props.location
    const { selectedPortfolioItem, portfolio, handleSymbolSelect } = this.props

    const selectedPortfolioItem_object = portfolio[selectedPortfolioItem]
    
    return (

      <div>

      <div className="individual-nav">
  
        { isCell() ? 
       
          <i className="fas fa-bars fa-7x" 
             onClick={()=>this.setState({isModalShowing: true, whichModal: 'page-selector'})}
          />
          
          :

          <div style={ { width: isDesktop()? "1.7vw" : "7vw"} }>

          </div>
        
        }

        <div  
          onClick={()=>this.setState({isModalShowing: true, whichModal: 'symbol-selector'})}
        >
  
          <span>{selectedPortfolioItem_object && selectedPortfolioItem_object.symbol}</span> 
  
            <i className="fas fa-angle-down fa-7x" />
         
        </div>
  
        <span     
          onClick={()=>this.setState({isModalShowing: true, whichModal: 'trade-box'})}
        >
          Trade
        </span>
      
      </div>
      {
        !isCell() &&
        
        <div className="page-selector">
        
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
            
              { whichModal === 'page-selector' &&

                <IndivSelector 
                  pathname={pathname} 
                  exit={this.closeModal}
                />
              }

              { whichModal === 'trade-box' && 
                
                <TradeBox  
                  exit={this.closeModal}
                />
              }

              {
                whichModal === 'symbol-selector' && portfolio &&

                  <div onClick={(e)=> { 
                      handleSymbolSelect(e.target.textContent)
                      this.setState({isModalShowing: false})
                    }} > 

                    {Object.entries(portfolio)
                        .sort()
                        .map((item, i )=>{

                        return(
                          <span key={i}>{item[0]}</span>
                        )
                    })}
                  </div>
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
    selectedPortfolioItem: Portfolio_state.selectedPortfolioItem,
    portfolio: Portfolio_state.portfolio
  };
};

const mapDispatchToProps = dispatch => ({
  hydrateSinglePortfolioPage: (...args) => dispatch(hydrateSinglePortfolioPage(...args)),
  handleSymbolSelect: (symbol) => dispatch(actions.handleSymbolSelect(symbol)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IndivNav);