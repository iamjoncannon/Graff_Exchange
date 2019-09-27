import React from 'react';
import { connect } from "react-redux";
import PerformanceChart from './PerformanceChart'
import DataNav from '../DataNav'

class IndivPerf extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {

      selectedDataNavItem : "Week",
      current_holding: 0
    }
  }

  componentDidMount(){

    let {selectedPortfolioItem} = this.props
    
    if(selectedPortfolioItem){

      this.setState({

        current_holding: selectedPortfolioItem.current_holding
      })
    }
    
  }

  componentDidUpdate(){

    const { selectedPortfolioItem } = this.props 
    
    if(selectedPortfolioItem && selectedPortfolioItem.current_holding !== this.state.current_holding){

      this.setState({

        current_holding: selectedPortfolioItem.current_holding
      })
    }
  }

  dataSwitch = (newDisplay) => {

    this.setState({

      selectedDataNavItem : newDisplay,
    })
  }

  render() {

    const { selectedDataNavItem } = this.state
    
    const { selectedPortfolioItem, portfolio } = this.props 

    let { current_holding } = this.state
    
    function formatChange(input){

      return (input * 100).toFixed(2)
    }

    function chartPeriod(period){

      switch(period){

        case "Week": 
          return 5
        case "Month":
          return 30
        case "Year":
          return 365
      }
    }

    return (

      <div className="indiv-perf">
        
        <div className="ticker-box">

          <span>
            $ {selectedPortfolioItem && selectedPortfolioItem.price}
          </span>

          <span>

            {selectedPortfolioItem && formatChange(selectedPortfolioItem.data.changePercent)}%
        
          </span>

        </div>

      { selectedPortfolioItem && selectedPortfolioItem.price &&
        
          <div className="first-datapoints">

                  {[["Holdings", `${current_holding}`],
                    ["Value", `$${ (current_holding * selectedPortfolioItem.price).toFixed(2)}`]].map( (item, i)=>{

                    return(

                      <div key={i}>
                        <span>
                          {item[0]}
                        </span>
                        <span>
                          {item[1]}
                        </span>
                      </div>
                    )
                  })}
          </div>
        
        } 

        <div className="chart-container">

          <span> 

            {selectedDataNavItem}
          
          </span>

          <PerformanceChart period={chartPeriod(selectedDataNavItem)} />

        </div>

        <DataNav 
          data={["Week", "Month", "Year"]} 
          selectedDataNavItem={selectedDataNavItem}
          switchItem={this.dataSwitch}
        />
    
      </div>

    );
  }
}

const mapStateToProps = ({ Portfolio_state }) => {
  return {
    selectedPortfolioItem: Portfolio_state.selectedPortfolioItem,
    portfolio: Portfolio_state.portfolio
  };
};

export default connect(
  mapStateToProps,
  null
)(IndivPerf);