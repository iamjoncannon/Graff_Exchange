import React from 'react';
import { connect } from "react-redux";

class IndivTrans extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {

    const { transactionHistory, selectedPortfolioItem } = this.props
    
    return (
      <div className="indiv-trans indiv-container">

        <div>

          <span>Type</span>
          <span>Quantity</span>
          <span>Price</span>
          <span>Date</span>

        </div>

        <div>

          { transactionHistory &&
            Object.entries(transactionHistory)
              .reverse()
              .filter(item =>{       

                return item[1].symbol === selectedPortfolioItem.symbol && item[1].quantity > 0
              })
              .map((item, i)=>{
                
                let date = item[1].date_conducted 
                date = date.slice(0,date.indexOf(":")-2)

                return(

                  <div key={i}>
                    <span>{item[1].type}</span>
                    <span>{item[1].quantity}</span>
                    <span>${item[1].price}</span>
                    <span>{date}</span>
                  </div>
                )
            })
          }
        </div>
      </div>
    );
  }
}


const mapStateToProps = ({ Portfolio_state }) => {

  return {
    transactionHistory : Portfolio_state.transactionHistory,
    selectedPortfolioItem: Portfolio_state.selectedPortfolioItem
  };
};

export default connect(
  mapStateToProps,
  null
)(IndivTrans);
