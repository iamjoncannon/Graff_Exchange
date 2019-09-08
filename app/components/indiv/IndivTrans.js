import React from 'react';
import { connect } from "react-redux";

class IndivTrans extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {

    const {transactionHistory, selectedPortfolioItem} = this.props

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
                return item[1].Symbol === selectedPortfolioItem.symbol && item[1].Quantity > 0
              })
              .map((item, i)=>{

                let date = item[1].Date 
                date = date.slice(0,date.indexOf("T"))

                return(

                  <div key={i}>
                    <span>{item[1].Type}</span>
                    <span>{item[1].Quantity}</span>
                    <span>${item[1].Price}</span>
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
