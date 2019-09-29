import React, { Suspense, lazy } from 'react';
import { connect } from "react-redux";
import DataNav from '../DataNav'
import { hydrateTimeSeriesDataThunk } from "../../../store/Portfolio/thunks_for_Portfolio"
import { isCell } from "../utils"

const PerformanceChart = lazy(() => import('./PerformanceChart'))

class IndivPerf extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {

      selectedDataNavItem : "Week",
      current_holding: 0
    }
  }

  // for mobile, data is hydrated by the nav
  // component  

  componentDidMount(){
    
    const { selectedPortfolioItem, portfolio } = this.props

    const selectedPortfolioItem_object = portfolio[selectedPortfolioItem]

    if(!isCell() && !selectedPortfolioItem_object.historical){

      this.hydrate_data()
    }
    
  }

  // the individual components don't remount when the nav component
  // updates the selected portfolio item- we have to have each of them
  // determine if they need to hydrate appropriate data upon update 
  
  componentDidUpdate(){

    const { selectedPortfolioItem, portfolio } = this.props

    const selectedPortfolioItem_object = portfolio[selectedPortfolioItem]

    if(!isCell() && !selectedPortfolioItem_object.historical){

      this.hydrate_data()
    }
  }

  hydrate_data = () => {
      
    const { hydrateTimeSeriesDataThunk, selectedPortfolioItem} = this.props

    hydrateTimeSeriesDataThunk(selectedPortfolioItem)
  }

  dataSwitch = (newDisplay) => {

    this.setState({

      selectedDataNavItem : newDisplay,
    })
  }

  render() {

    const { selectedDataNavItem } = this.state
    
    const { selectedPortfolioItem, portfolio } = this.props 

    const selectedPortfolioItem_object = portfolio[selectedPortfolioItem]

    let { current_holding } = selectedPortfolioItem_object
    
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
            $ {selectedPortfolioItem_object && selectedPortfolioItem_object.price 
                ?   
                selectedPortfolioItem_object.price
                :
                selectedPortfolioItem_object.data.latestPrice
              }
          </span>

          <span>

            {selectedPortfolioItem_object && selectedPortfolioItem_object.data && formatChange(selectedPortfolioItem_object.data.changePercent)}%
        
          </span>

        </div>

      { selectedPortfolioItem_object && selectedPortfolioItem_object.price &&
        
          <div className="first-datapoints">

                  {[["Holdings", `${current_holding}`],
                    ["Value", `$${ (current_holding * selectedPortfolioItem_object.price).toFixed(2)}`]].map( (item, i)=>{

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
          <Suspense fallback="Loading...">
            <PerformanceChart period={chartPeriod(selectedDataNavItem)} />
          </Suspense>
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

const mapDispatchToProps = dispatch => ({

  hydrateTimeSeriesDataThunk: (symbol) => dispatch(hydrateTimeSeriesDataThunk(symbol))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IndivPerf);