import React from 'react';
import { connect } from "react-redux";
import { makeTradeThunk } from "../../../store/Portfolio/thunks_for_Portfolio.js"

class TradeBox extends React.Component {

  constructor(props){
      super(props)

      this.state = {
          size: 0,
          isToolTipShowing: false,
          tooltipMessage: ''
      }
  }

  handleTrade = (type) =>{

      const { portfolio, 
              selectedPortfolioItem, 
              makeTradeThunk,
              balance } = this.props

      const selectedPortfolioItem_object = portfolio[selectedPortfolioItem]

      const { quantity, price, symbol } = selectedPortfolioItem_object

      // validate the trade

      if(type === "Sell" && (this.state.size > quantity) ) {

          this.setState({
              isToolTipShowing: true,
              tooltipMessage: "Insufficient holdings to cover trade."
          })

          setTimeout(()=>{
              this.setState({isToolTipShowing: false})
          }, 2000)

          return
      }
      else if(type === "Buy" && ( (this.state.size * price) > balance) ){

          this.setState({
              isToolTipShowing: true,
              tooltipMessage: "Insufficient balance to cover trade."
          })

          setTimeout(()=>{
              this.setState({isToolTipShowing: false})
          }, 2000)

          return
      }
      else{
          
          makeTradeThunk(symbol, this.state.size, type, price)
          this.setState({size: 0})
          this.props.exit()
          return
      }
  }

  render(){

    return (

      <div>
            <span>
              Quantity
            </span>

            <input 
              type="number" 
              min="1" 
              max="5"
              onChange={(e)=>this.setState({size: e.target.value})}
            />
            <div>

              <button onClick={()=> this.handleTrade('Buy')}>
                Buy
              </button>
              
              <button onClick={()=> this.handleTrade('Sell')}>
                Sell
              </button>

            </div>

            { this.state.isToolTipShowing && <span>{this.state.tooltipMessage}</span>}
      </div>

    );
  }
};

const mapStateToProps = ({ User_state, Portfolio_state }) => {
  return {
    portfolio: Portfolio_state.portfolio, 
    selectedPortfolioItem : Portfolio_state.selectedPortfolioItem,
    balance: User_state.Balance
  };
};

const mapDispatchToProps = dispatch => ({
  makeTradeThunk: (...args) => dispatch(makeTradeThunk(...args)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TradeBox);