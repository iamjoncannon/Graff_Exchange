import React from 'react';
import { connect } from "react-redux";

class AllTrans extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount(){

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
            Object.entries(this.props.transactionHistory).map((item, i)=>{
              
              let date = item[1].Date 
              date = date.slice(0,date.indexOf("T"))

              return(

                <div>
                  <span>{item[1].Type}</span>
                  <span>{item[1].Symbol} </span>
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
    transactionHistory : Portfolio_state.transactionHistory
  };
};

export default connect(
  mapStateToProps,
  null
)(AllTrans);
