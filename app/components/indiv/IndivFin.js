import React from 'react';
import { connect } from "react-redux";
import DataNav from '../DataNav'

class IndivFin extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {

      selectedDataNavItem : "Q2 2019",
    }
  }

  componentDidMount(){

  }

  dataSwitch = (newDisplay) => {
    window.scrollTo(0, 0);

    this.setState({

      selectedDataNavItem : newDisplay,
    })
  }

  render() {

    window.scrollTo(0, 0);
    
    const {financials} = this.props

    return (

      <div>


        <div className="indiv-fin indiv-container">

          <span>{this.state.selectedDataNavItem}</span>

          { financials && Object.entries(financials).map(item=>{
            
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
          })}

        </div>

        <DataNav 
          data={["Q2 2019", "Q1 2019", "Q4 2018", "Q3 2018"]} 
          selectedDataNavItem={this.state.selectedDataNavItem}
          switchItem={this.dataSwitch}
        />

      </div>

    );
  }
}

const mapStateToProps = ({ Portfolio_state }) => {
  return {
    financials: Portfolio_state.selectedPortfolioItem.financials
  };
};

export default connect(
  mapStateToProps,
  null
)(IndivFin);