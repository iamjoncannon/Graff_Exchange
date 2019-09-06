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

      /*
          endpoint expects:
          Symbol: '',
          Quantity: '',
          Type: 'Buy',
          Price: "",
      */

      const { token, 
              selectedPortfolioItem, 
              makeTradeThunk,
              balance } = this.props

      const { quantity, price, symbol } = selectedPortfolioItem

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
          
          makeTradeThunk(symbol, this.state.size, type, price, token)
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
      </div>
    );
  }
};

const mapStateToProps = ({ User_state, Portfolio_state }) => {
  return {
    token: User_state.token,
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