import React from 'react';
import { connect } from "react-redux";
import { isDesktop } from '../utils'
import AddSymbolBox from "./AddSymbolBox"
import { makeTradeThunk } from "../../../store/Portfolio/thunks_for_Portfolio.js"

class AllWatchList extends React.Component {
 
  constructor(props) {
    super(props);

    this.state = {

        isModalShowing : false,
        edit: false,
        unwatch: []
    }

   }

    closeModal = () => {

      this.setState({ isModalShowing : false })
    }

    handleEdit = (item) =>{
      
      // in the future could make an option to liquidate the holding
      // this.props.makeTradeThunk(symbol, quantity, "Sell", price, this.props.token)

      // for now-- just going to unwatch it for this session- could 
      // put this in local storage as well in the future
      this.setState({
        unwatch : [...this.state.unwatch, item[1].symbol]
      })

    }
  
    render() {

      const { isModalShowing, edit } = this.state
      const { portfolio, token } = this.props
  
      return (

        <div>

        <div className="all-watchlist">
        
          <div>

            <i 
              className={`fas fa-plus fa-${isDesktop() ? "2" : "7"}x`} 
              onClick={()=>this.setState({edit: false, isModalShowing: true})}
            />
          
            <i 
              className={`fas fa-edit fa-${isDesktop() ? "2" : "7"}x`} 
              onClick={()=>this.setState({edit: !edit, isModalShowing: false})}            
            />
          
          </div>

          <span>Portfolio</span>
          
          <div>

            { portfolio && 

              Object.entries(portfolio)
                .filter((item)=>{

                    return !this.state.unwatch.includes(item[1].symbol)
                })
                .map((item, i)=>{

                  const { data } = item[1]

                  const color = data.latestPrice < item[1].price ? "green" : "red";

                  return(

                  <div key={i} className="watchlist-item-container">

                      { this.state.edit && 
                        

                        <i 
                          className={`fas fa-minus fa-${isDesktop() ? "2" : "7"}x`} 
                          onClick={()=> this.handleEdit(item) }
                        />
                      
                      }

                    <div className="watchlist-item">

                      <div>

                        <span style={{ color : color }}> {item[1].symbol}</span>
                      
                        <span> {data.companyName}</span>

                        <span style={{ color : color }}> ${item[1].price} </span>
                        
                      </div>
                      <div>
                        <span>{data.change}</span>
                        <span>{data.changePercent}%</span>
                      </div>
                    </div>
                  </div>
                  )
                }
              )
            }
          </div>

        </div>

          {
            isModalShowing && 

            <div className="modal-container" onClick={()=>this.setState({isModalShowing: false})}>

              <div onClick={ (e)=> e.stopPropagation()} >
                
                    <AddSymbolBox />
              </div>
            </div>
          }

        </div>
      );
    };
}


const mapStateToProps = ({ User_state, Portfolio_state }) => {

  return {
    token: User_state.token,
    portfolio : Portfolio_state.portfolio
  };
};

const mapDispatchToProps = dispatch => ({
  makeTradeThunk: (...args) => dispatch(makeTradeThunk(...args)),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllWatchList);