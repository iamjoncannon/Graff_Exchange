import React from 'react';
import { connect } from "react-redux";

class AllTrans extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {

    }
  }


  render() {

    return (
      <div className="all-trans">

        <span>Transaction History</span>

        <div>

          <span>Type</span>
          <span>Symbol</span>
          <span>Quantity</span>
          <span>@Buy</span>
          <span>Date</span>

        </div>

        <div>

          {
            Object.entries(this.props.transactionHistory)
              .reverse()
              .filter(item =>{                
                
                  return item[1].quantity > 0
                })
              .map((item, i)=>{
                
                // note- date is relative to GMT from server
                // conversion 
                let date = item[1].date_conducted
                                  .slice(0, item[1].date_conducted.indexOf("GMT"))
                                  .slice(0, item[1].date_conducted.indexOf(":")-2)

                return(

                  <div key={i} className={"_allTransItem"}>
                    <span>{item[1].type}</span>
                    <span>{item[1].symbol}</span>
                    <span>{item[1].quantity}</span>
                    <span>${item[1].price.toFixed(2)}</span>
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
    transactionHistory : Portfolio_state.transactionHistory
  };
};

export default connect(
  mapStateToProps,
  null
)(AllTrans);
