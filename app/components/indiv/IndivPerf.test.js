import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import IndivPerf from './IndivPerf'
import configureStore from 'redux-mock-store';
import thunk from "redux-thunk"
const mockStore = configureStore([thunk]);
import { hydrateTimeSeriesDataThunk } from "../../../store/Portfolio/thunks_for_Portfolio"
import { BrowserRouter as Router } from "react-router-dom";
import nocked from "../../../test/nock.setup.js"

const fake_api_data = {"data":
    {"hydrate_time_series_data":
        [{
            "date":"2019-10-02",
            "open":1206.42,
            "high":1206.42,
            "low":1173.37,
            "close":1176.985,
            "__typename":"Time_Series_Data_Point"
        }]
    }
}

const fake_store_without_data =  {
 
    Portfolio_state: {
        portfolio: {
            FB: {
                symbol: "FB",
                price: 100,
                current_holding: 3
            }
        },
        selectedPortfolioItem: "FB"
    }
}

const fake_store_without_socket_data =  {
 
    Portfolio_state: {
        portfolio: {
            FB: {
                symbol: "FB",
                price: null, 
                data: {
                    latestPrice: 200
                }
            }
        },
        selectedPortfolioItem: "FB"
    }
}

const fake_store_with_data =  {
 
    Portfolio_state: {
        portfolio: {
            FB: {
                symbol: "FB",
                price: 100,
                current_holding: 5,
                historical: fake_api_data.data.hydrate_time_series_data,
                data: {
                    changePercent: .03,
                    latestPrice: 200
                }
            }
        },
        selectedPortfolioItem: "FB"
    }
}

const fake_store_with_blank_data =  {
 
    Portfolio_state: {
        portfolio: {
            FB: {
                symbol: "FB",
                historical: []
            }
        },
        selectedPortfolioItem: "FB"
    }
}

const store_setup = (store) => {

    return renderer.create(
        <Provider store={store} >
           <Router >
               <IndivPerf location={{pathname: "/"}}/>
           </Router>
       </Provider>
   );
}

describe("IndivPerf", ()=>{

    let component 
    let store 

    beforeEach(()=>{
        
        nocked(fake_api_data)
        
        store = mockStore( fake_store_without_data );
    
        component = store_setup(store)
    })

    afterEach(()=>{

        store.clearActions();
    })

    it('1) renders successfully with data from redux store', ()=>{

        let tree = component.toJSON();
        
        expect(tree).toMatchSnapshot();
    })

    it("2) if not cell and no portfolio.historical data, calls hydrateTimeSeriesDataThunk ", (done)=>{
       
        store.dispatch( hydrateTimeSeriesDataThunk("FB") )
        .then(()=> {
            
            let dispatched_actions = store.getActions()
            expect(dispatched_actions[0].type).toEqual(dispatched_actions[1].type)    
            done()
        })  
    })

    it("3) renders ticker box div with price if price defined from socket", ()=>{

        const className = "ticker-box"

        const ticker_box = component.root.find( node=> node.props.className === className )

        expect(ticker_box).toBeTruthy()

        expect(ticker_box.children[0].children).toEqual([ '$ ', '100' ])
    
    })
})

describe("IndivPerf", ()=>{

    let component 
    let store 

    beforeEach(()=>{
        
        nocked(fake_api_data)
        
        store = mockStore( fake_store_without_socket_data );
    
        component = store_setup(store)
    })

    afterEach(()=>{

        store.clearActions();
    })

    it("4) renders ticker box with latestPrice if price not defined from socket", ()=>{

        const className = "ticker-box"

        const ticker_box = component.root.find( node=> node.props.className === className )

        expect(ticker_box.children[0].children).toEqual([ '$ ', '200' ])
    })
})

describe("IndivPerf", ()=>{

    let component 
    let store 
    let connected_react_component

    beforeEach(()=>{
        
        nocked(fake_api_data)
        
        store = mockStore( fake_store_with_data );
    
        component = store_setup(store)
        connected_react_component = component.root.children[0].children[0].children[0].children[0]._fiber.stateNode
    })

    afterEach(()=>{

        store.clearActions();
    })

    it("5) renders changePercent in span", ()=>{

        const className = "ticker-box"

        const ticker_box = component.root.find( node=> node.props.className === className )

        expect(ticker_box.children[1].children).toEqual([ '3.00', '%' ])
    })

    it("6) renders current holding and value in span", ()=>{

        const className = "first-datapoints"

        const datapoints = component.root.find( node=> node.props.className === className )

        expect(datapoints.children[0].children[1].children[0]).toEqual("5")
      
        expect( datapoints.children[1].children[1].children[0] ).toEqual('$500.00')
    })

    it("7) renders PerformanceChart with chartPeriod as prop", ()=>{

        let chart = component.root.find( node => node.type.name === "PerformanceChart")

        expect(chart).toBeTruthy()

        expect(chart.props.period).toEqual(5)
    })

    it("8) renders a DataNav component with selectedDataNavItem prop", ()=>{

        let DataNav = component.root.find( node => node.type.name === "DataNav")

        expect(DataNav).toBeTruthy()

        expect(DataNav.props.selectedDataNavItem).toEqual("Week")
    })

    it("9) DataNav switchItem callback changes selectedDataNavItem in state", ()=>{

        let DataNav = component.root.find( node => node.type.name === "DataNav")

        renderer.act(()=>{

            DataNav.props.switchItem("Test")
        })

        expect(connected_react_component.state.selectedDataNavItem).toEqual("Test")
    })
})

describe("IndivPerf", ()=>{

    let component 
    let store 

    beforeEach(()=>{
        
        nocked(fake_api_data)
        
        store = mockStore( fake_store_with_data );
    
        component = store_setup(store)
    })

    afterEach(()=>{

        store.clearActions();
    })

    it("10) if cell viewport and no portfolio.historical data, does not call hydrateTimeSeriesDataThunk ", (done)=>{
       
        store.dispatch( hydrateTimeSeriesDataThunk("FB") )
        .then(()=> {
            
            let dispatched_actions = store.getActions()
            expect(dispatched_actions.length).toEqual(1)    
            done()
        })  
    })
})
