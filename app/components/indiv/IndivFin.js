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

  hydrate_data = () => {

    const { hydrateQuarterlyFinancialsThunk, selectedPortfolioItem} = this.props
      
    hydrateQuarterlyFinancialsThunk(selectedPortfolioItem)
  }

  componentDidMount(){

    !isCell() && this.hydrate_data()
  }

  componentDidUpdate(){

    const { selectedPortfolioItem, portfolio } = this.props

    const selectedPortfolioItem_object = portfolio[selectedPortfolioItem]

    if(!isCell() && !selectedPortfolioItem_object.financials){

      this.hydrate_data()
    }
  }

  render() {

    window.scrollTo(0, 0);

    const { selectedPortfolioItem, portfolio} = this.props

    const selectedPortfolioItem_object = portfolio[selectedPortfolioItem]

    const { dataNavItems, selectedDataNavItem } = this.state
    
    const whichFinancial = dataNavItems.indexOf(selectedDataNavItem)

    return (

      <div>

        { selectedPortfolioItem_object && selectedPortfolioItem_object.financials && selectedPortfolioItem_object.financials.length && 
          <div className="indiv-fin indiv-container">

            <span>{selectedDataNavItem}</span>

            
              {Object.entries(selectedPortfolioItem_object.financials[whichFinancial])
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
    portfolio: Portfolio_state.portfolio,
    selectedPortfolioItem: Portfolio_state.selectedPortfolioItem
  };
};

const mapDispatchToProps = dispatch => ({

  hydrateQuarterlyFinancialsThunk: (symbol) => dispatch(hydrateQuarterlyFinancialsThunk(symbol))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IndivFin);
