import React from 'react';
import { connect } from "react-redux";

import DataNav from '../DataNav'

class IndivPerf extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {

      selectedDataNavItem : "Day",
    }
  }

  componentDidMount(){

  }

  dataSwitch = (newDisplay) => {

    this.setState({

      selectedDataNavItem : newDisplay,
    })
  }

  render() {

    const { selectedDataNavItem } = this.state

    const { selectedPortfolioItem } = this.props 

    return (
      <div className="indiv-perf">
        <div className="ticker-box">

          <span>
            $ {selectedPortfolioItem && selectedPortfolioItem.price}
          </span>

          <span>

            {selectedPortfolioItem && selectedPortfolioItem.data.changePercent}%
        
          </span>

        </div>

        <div className="first-datapoints">

              {
                [["Open", `$${selectedPortfolioItem.data.open}`],
                  ["Close", `$${selectedPortfolioItem.data.close}`],
                  ["Change", `${selectedPortfolioItem.data.change}`]].map(item=>{

                  return(

                    <div>
                      <span>
                        {item[0]}
                      </span>
                      <span>
                        {item[1]}
                      </span>
                    </div>
                  )
                })
              }
        </div>

        <div className="second-datapoints">
          
              {
                [["High", `$${selectedPortfolioItem.data.high}`],
                 ["Low", `$${selectedPortfolioItem.data.low}`],
                 ["Volume", `${selectedPortfolioItem.data.volume}`],
                   ].map(item=>{

                  return(

                    <div>
                      <span>
                        {item[0]}
                      </span>
                      <span>
                        {item[1]}
                      </span>
                    </div>
                  )
                })
              }

        </div>

        <div className="chart-container">

          <span> 
          {selectedDataNavItem}
          </span>
        </div>

        <DataNav 
          data={["Day", "Week", "Month", "Year"]} 
          selectedDataNavItem={selectedDataNavItem}
          switchItem={this.dataSwitch}
        />
    
      </div>

    );
  }
}

const mapStateToProps = ({ Portfolio_state }) => {
  return {
    selectedPortfolioItem: Portfolio_state.selectedPortfolioItem
  };
};

export default connect(
  mapStateToProps,
  null
)(IndivPerf);