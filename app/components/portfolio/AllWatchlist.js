import React from 'react';
import { connect } from "react-redux";
import { isDesktop } from '../utils'
import AddSymbolBox from "./AddSymbolBox"

class AllWatchList extends React.Component {
 
  constructor(props) {
    super(props);

    this.state = {

        isModalShowing : false,
        edit: false
    }

   }

    closeModal = () => {

      this.setState({ isModalShowing : false })
    }
  
    render() {

      const { isModalShowing, edit } = this.state
      const { portfolio } = this.props
  
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

              Object.entries(portfolio).map((item, i)=>{

                const { data } = item[1]

                const color = data.latestPrice < item[1].price ? "green" : "red";

                return(

                <div className="watchlist-item-container">

                    { this.state.edit && 
                      
                      <i 
                        className={`fas fa-minus fa-${isDesktop() ? "2" : "7"}x`} 
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
              })
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


const mapStateToProps = ({ Portfolio_state }) => {
  return {
    portfolio : Portfolio_state.portfolio
  };
};

export default connect(
  mapStateToProps,
  null
)(AllWatchList);