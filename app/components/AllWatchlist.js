import React from 'react';
import {isDesktop} from './utils'
import AddSymbolBox from "./AddSymbolBox"

const dummyData = [
  ["Bitcoin", "BTC", "4878", "2.54"],
  ["Bitcoin4", "BTC", "4878", "2.54"],
  ["Bitcoinr", "BTC", "4878", "2.54"],
  ["Bitcoin", "BTC", "4878", "2.54"],
  ["Bitcoin", "BTC", "4878", "2.54"],
  ["Bitcoin", "BTC", "4878", "2.54"],
  ["Bitcoin", "BTC", "4878", "2.54"],
  ["Bitcoin", "BTC", "4878", "2.54"],
  ["Bitcoin", "BTC", "4878", "2.54"],
  ["Bitcoin", "BTC", "4878", "2.54"],
]

export default class AllWatchList extends React.Component {
 
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

      const {isModalShowing, edit} = this.state

 
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

            {
              dummyData.map((item, i)=>{

                return(

                <div className="watchlist-item-container">

                    { this.state.edit && 
                      
                      <i 
                        className={`fas fa-minus fa-${isDesktop() ? "2" : "7"}x`} 
                      />
                    
                    }

                  <div className="watchlist-item">

                    <div>

                      <span>{item[0]}</span>
                      <span>{item[1]} </span>
                      
                    </div>

                    <div>
                
                      <span>{item[2]}</span>
                      <span>{item[3]}</span>
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
