import React from 'react';
import { connect } from "react-redux";
import DataNav from '../DataNav'
import { hydrateQuarterlyFinancialsThunk } from "../../../store/Portfolio/thunks_for_Portfolio"
import { isCell } from "../utils"

// Financials Page- displays quarterly financial reports

class IndivFin extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {
      dataNavItems: ["Q1 2019", "Q4 2018", "Q3 2018", "Q2 2018"],
      selectedDataNavItem : "Q1 2019"
    }
  }


  dataSwitch = (newDisplay) => {
    window.scrollTo(0, 0);

    this.setState({

      selectedDataNavItem : newDisplay,
    })
  }

  componentDidMount(){

    if(!isCell()){
      
      const { hydrateQuarterlyFinancialsThunk, selectedPortfolioItem} = this.props

      hydrateQuarterlyFinancialsThunk(selectedPortfolioItem.symbol)
    }
  }

  render() {

    window.scrollTo(0, 0);

    const { dataNavItems, selectedDataNavItem } = this.state
    
    const whichFinancial = dataNavItems.indexOf(selectedDataNavItem)

    return (

      <div>

        { this.props.financials && this.props.financials.length && 
          <div className="indiv-fin indiv-container">

            <span>{selectedDataNavItem}</span>

            
              {Object.entries(this.props.financials[whichFinancial])
                .map( (item, i) =>{
              
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

        <DataNav 
          data={dataNavItems} 
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
    financials: Portfolio_state.selectedPortfolioItem.financials
  };
};

const mapDispatchToProps = dispatch => ({

  hydrateQuarterlyFinancialsThunk: (symbol) => dispatch(hydrateQuarterlyFinancialsThunk(symbol))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IndivFin);
