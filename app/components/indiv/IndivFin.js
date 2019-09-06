import React from 'react';
import { connect } from "react-redux";
import DataNav from '../DataNav'

const dummyData = {
    thing : 'value',
    anotherThing : 'another value',
    thing2 : 'value',
    anotherThing2 : 'another value',
    thing3 : 'value',
    anotherThing3 : 'another value',
    thing4 : 'value',
    anotherThing4 : 'another value',
    thing5 : 'value',
    anotherThing5 : 'another value',
    thing6 : 'value',
    anotherThing6 : 'another value',
    thing7 : 'value',
    anotherThing7 : 'another value',
    thing8 : 'value',
    anotherThing8 : 'another value',
    athing : 'value',
    aanotherThing : 'another value',
    athing2 : 'value',
    aanotherThing2 : 'another value',
    athing3 : 'value',
    aanotherThing3 : 'another value',
    athing4 : 'value',
    anotherThing4 : 'another value',
    athing5 : 'value',
    aanotherThing5 : 'another value',
    athing6 : 'value',
    aanotherThing6 : 'another value',
    athing7 : 'value',
    aanotherThing7 : 'another value',
    athing8 : 'value',
    aanotherThing8 : 'another value',
}

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

    const {selectedPortfolioItem} = this.props

    return (

      <div>


        <div className="indiv-fin indiv-container">

          <span>{this.state.selectedDataNavItem}</span>

          { selectedPortfolioItem && Object.entries(selectedPortfolioItem.financials).map(item=>{
            
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
    selectedPortfolioItem: Portfolio_state.selectedPortfolioItem
  };
};

export default connect(
  mapStateToProps,
  null
)(IndivFin);