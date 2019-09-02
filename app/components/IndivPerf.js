import React from 'react';
import DataNav from './DataNav'

export default class IndivPerf extends React.Component {
 
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

    return (
      <div className="indiv-perf">
        <div className="ticker-box">

          <span>
            $ 231.79
          </span>

          <span>
            +17,39%
          </span>

        </div>

        <div className="first-datapoints">

              {
                [["Open", "$ 232.41"],
                  ["24H  High","$ 234.00"],
                  ["24H Low", "$233.85"]].map(item=>{

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