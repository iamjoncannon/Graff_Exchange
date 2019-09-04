import React from 'react';

const dummyData = [
  ["Buy", "GOOGL", "4", "1152", "2019-07-16"],
  ["Buy", "GOOGL", "4", "1152", "2019-07-16"],
  ["Buy", "GOOGL", "4", "1152", "2019-07-16"],
  ["Buy", "GOOGL", "4", "1152", "2019-07-16"],
  ["Buy", "GOOGL", "4", "1152", "2019-07-16"],
  ["Buy", "GOOGL", "4", "1152", "2019-07-16"],
  ["Buy", "GOOGL", "4", "1152", "2019-07-16"],
  ["Buy", "GOOGL", "4", "1152", "2019-07-16"],
  ["Buy", "GOOGL", "4", "1152", "2019-07-16"],
  ["Buy", "GOOGL", "4", "1152", "2019-07-16"],
  ["Buy", "GOOGL", "4", "1152", "2019-07-16"],
  ["Buy", "GOOGL", "4", "1152", "2019-07-16"],
  ["Buy", "GOOGL", "4", "1152", "2019-07-16"],
  ["Buy", "GOOGL", "4", "1152", "2019-07-16"],
  ["Buy", "GOOGL", "4", "1152", "2019-07-16"],
  ["Buy", "GOOGL", "4", "1152", "2019-07-16"],
  ["Buy", "GOOGL", "4", "1152", "2019-07-16"],
  ["Buy", "GOOGL", "4", "1152", "2019-07-16"],
  ["Buy", "GOOGL", "4", "1152", "2019-07-16"],
  ["Buy", "GOOGL", "4", "1152", "2019-07-16"],
  ["Buy", "GOOGL", "4", "1152", "2019-07-16"],
  ["Buy", "GOOGL", "4", "1152", "2019-07-16"],
  ["Buy", "GOOGL", "4", "1152", "2019-07-16"],
  ["Buy", "GOOGL", "4", "1152", "2019-07-16"],
  ["Buy", "GOOGL", "4", "1152", "2019-07-16"],
  ["Buy", "GOOGL", "4", "1152", "2019-07-16"],
  ["Buy", "GOOGL", "4", "1152", "2019-07-16"],
  ["Buy", "GOOGL", "4", "1152", "2019-07-16"],
  ["Buy", "GOOGL", "4", "1152", "2019-07-16"],
  ["Buy", "GOOGL", "4", "1152", "2019-07-16"],
  ["Buy", "GOOGL", "4", "1152", "2019-07-16"],
  ["Buy", "GOOGL", "4", "1152", "2019-07-16"],
  ["Buy", "GOOGL", "4", "1152", "2019-07-16"],
  ["Buy", "GOOGL", "4", "1152", "2019-07-16"],
  ["Buy", "GOOGL", "4", "1152", "2019-07-16"],
]


export default class AllTrans extends React.Component {
 
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
          <span>Price</span>
          <span>Date</span>

        </div>

        <div>

          {
            dummyData.map((item, i)=>{
              return(

                <div>
                  <span>{item[0]}</span>
                  <span>{item[1]} </span>
                  <span>{item[2]}</span>
                  <span>{item[3]}</span>
                  <span>{item[4]}</span>
                </div>
              )
            })
          }
        </div>
      </div>
    );
  }
}