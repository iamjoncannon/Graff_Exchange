import React from 'react';
import { connect } from "react-redux";
import { isDesktop } from '../utils'
import AddSymbolBox from "./AddSymbolBox"
import LoadingDots from '../loadingDots'

class AllWatchList extends React.Component {
 
  constructor(props) {
    super(props);

      this.state = {

          isModalShowing : false,
          edit: false,
          hideList: []
      }
   }

   componentDidMount(){

      let storedHideList = localStorage.getItem('hideList')

      this.setState({

        hideList: storedHideList ? JSON.parse( localStorage.getItem('hideList') ) : [] 
      })
   }

    closeModal = () => {

      this.setState({ isModalShowing : false })
    }

    handleEdit = (item) =>{
      
      const { hideList } = this.state
      let { symbol } = item[1]
      
      let newHidelist 

      if(hideList.includes(symbol)){

        newHidelist = hideList.filter(item => item !== symbol)
      }
      else{

        newHidelist = [ ...this.state.hideList, item[1].symbol ]
      }

      localStorage.setItem('hideList', JSON.stringify(newHidelist))

      this.setState({

        hideList : newHidelist
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
              className={`fas fa-plus fa-plus-edit fa-${isDesktop() ? "2" : "7"}x`} 
              onClick={()=>this.setState({edit: false, isModalShowing: true})}
            />
          
            <i 
              className={`fas fa-edit fa-${isDesktop() ? "2" : "7"}x`} 
              onClick={()=>this.setState({edit: !edit, isModalShowing: false})}            
            />
          
          </div>

          <span>Portfolio</span>
          
          <div>

            { portfolio ?

              Object.entries(portfolio)
                .sort()
                .filter((item)=>{

                    if(this.state.edit){

                      return true
                    }
                    else{

                      return !this.state.hideList.includes(item[1].symbol)
                    }
                })
                .map((item, i)=>{

                  const { data, symbol } = item[1]

                  const { hideList } = this.state 

                  return(

                  <div key={i} className="watchlist-item-container">

                      { this.state.edit && 
                        

                        <i 
                          className={`fas fa-${ hideList.includes(symbol) ? "plus" : "minus"} fa-${isDesktop() ? "2" : "7"}x`} 
                          onClick={()=> this.handleEdit(item) }
                        />
                      
                      }

                    { data &&
                      <div className="watchlist-item" style={{opacity: hideList.includes(symbol) ? ".5" : "1" }}>


                          <div>

                            <span style={{ color : data.latestPrice < item[1].price ? "green" : "red" }}> {item[1].symbol}</span>
                          
                            <span> {data.companyName}</span>

                            <span style={{ color : data.latestPrice < item[1].price ? "green" : "red" }}> 
                              ${ item[1].price} 
                            </span>
                            
                          </div>

                        <div>
                          <span>{data.change}</span>
                          <span>{data.changePercent}%</span>
                        </div>
                      </div>
                    }
                  </div>
                  )
                }
              )
            : <LoadingDots size={"10rem"} />
            }
          </div>

        </div>

          {
            isModalShowing && 

            <div className="modal-container" onClick={()=>this.setState({isModalShowing: false})}>

              <div onClick={ (e)=> e.stopPropagation()} >
                
                    <AddSymbolBox exit={this.closeModal}/>
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
    portfolio : Portfolio_state.portfolio,
    portfolioSize: Portfolio_state.portfolio.length
  };
};

export default connect(
  mapStateToProps,
  null
)(AllWatchList);