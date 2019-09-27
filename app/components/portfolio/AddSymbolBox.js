import React from 'react';
import { connect } from "react-redux";
import symbolHash from '../symbolHash.json'
import { makeTradeThunk } from "../../../store/Portfolio/thunks_for_Portfolio.js"

class AddSymbolBox extends React.Component {

      constructor(props){
          super(props)
        
          this.state = {
            stockName: null,
            input: null
          }
        }

        validateSymbol = (text) => {

          return !!symbolHash[text]
        }

        handleChange = (e) =>{

          let text = e.target.value

          this.setState({input: text })

          if(this.validateSymbol(text)){

            this.setState({
                stockName: symbolHash[text]
            })
          }
          else{

            this.setState({

              stockName: null
            })
          }
        }

        handleSubmit = () => {

          const {stockName, input} = this.state

          const {makeTradeThunk, exit} = this.props

          if(stockName && !this.props.portfolio[input]){

            makeTradeThunk( input, 0, "Buy", 0, this.props.token, true )
          }

          exit()
        }
  
        render(){

          const {stockName, input} = this.state

          return (

            <div className="trade-box symbol-box" id="add-symbol-box">

              <span>
                Symbol
              </span>

              <input 
                type="text" 
                min="1" 
                max="5"
                onChange={this.handleChange}
              />
              <div>

                <button 
                  onClick={this.handleSubmit} 
                  style={{opacity: stockName && !this.props.portfolio[input] ? "1" : ".3"}}
                >
                 Add
                </button>

              </div>

              
                <span> 
                  {this.state.stockName ? stockName : " "} 
                </span>
              
            </div>
          );
        }
};

const mapStateToProps = ({ Portfolio_state, User_state }) => {
  return {
    token: User_state.token,
    portfolio: Portfolio_state.portfolio,
  };
};

const mapDispatchToProps = dispatch => ({

  makeTradeThunk: (...args) => dispatch(makeTradeThunk(...args)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddSymbolBox);