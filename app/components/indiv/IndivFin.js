import React from 'react';
import { connect } from "react-redux";
import DataNav from '../DataNav'
import { hydrateQuarterlyFinancialsThunk } from "../../../store/Portfolio/thunks_for_Portfolio"
import { isCell } from "../utils"
import LoadingDots from '../loadingDots'

// Financials Page- displays quarterly financial reports

class IndivFin extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {
      selectedDataNavItem : null 
    }
  }

  dataSwitch = (newDisplay) => {

    this.setState({

      selectedDataNavItem : newDisplay,
    })
  }

  hydrate_data = () => {

    const { hydrateQuarterlyFinancialsThunk, selectedPortfolioItem} = this.props
      
    hydrateQuarterlyFinancialsThunk(selectedPortfolioItem)
  }

  componentDidMount(){

    const { selectedPortfolioItem, portfolio } = this.props

    const selectedPortfolioItem_object = portfolio[selectedPortfolioItem]

    if(!isCell() && !selectedPortfolioItem_object.financials){

      this.hydrate_data()
    }

  }

  componentDidUpdate(){

    const { selectedPortfolioItem, portfolio } = this.props

    const selectedPortfolioItem_object = portfolio[selectedPortfolioItem]

    if(!isCell() && !selectedPortfolioItem_object.financials){

      this.hydrate_data()
    }

  }

  render() {

    const { selectedPortfolioItem, portfolio } = this.props

    const selectedPortfolioItem_object = portfolio[selectedPortfolioItem]
    
                      // have to cascade like this to prevent null errors
    const is_Loaded = selectedPortfolioItem_object 
                      && selectedPortfolioItem_object.financials 
                      && selectedPortfolioItem_object.financials.length

    const no_financial_data = selectedPortfolioItem_object 
                              && selectedPortfolioItem_object.financials
                              && selectedPortfolioItem_object.financials.length === 0

    // harvest dates of reports from data 
    let data_nav_items = []
    
    if(is_Loaded){

      const { financials } = selectedPortfolioItem_object

      financials.forEach(each=> data_nav_items.push(each.date))
    }

    // interesting situation- we want to manage this nav state locally,
    // but state depends on data hydrated globally 

    let selectedDataNavItem 
    
    // solution- if this state proprty is null, ie component just mounted 
    if(!this.state.selectedDataNavItem){

      selectedDataNavItem = data_nav_items[0]

    }
    else{

      selectedDataNavItem = this.state.selectedDataNavItem
    }

    let whichFinancial = data_nav_items.indexOf(selectedDataNavItem)

    return (

      <div>

        { is_Loaded && whichFinancial !== undefined? 
          <div className="indiv-fin indiv-container">

            <span>{selectedDataNavItem}</span>

            
              { Object.entries(selectedPortfolioItem_object.financials[whichFinancial])
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
                })
              }

          </div>
            : no_financial_data ? 
            <span className={"error_message"}>
              Data Not Available
            </span>
            :
            <div style={{display: "block", textAlign: "center"}}> 
                <LoadingDots size={"10vh"} />
            </div>
          }

        <DataNav 
          data={data_nav_items} 
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
