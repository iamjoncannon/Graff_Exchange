import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import PerformanceChart from './PerformanceChart'
import configureStore from 'redux-mock-store';
import thunk from "redux-thunk"
const mockStore = configureStore([thunk]);
import { BrowserRouter as Router } from "react-router-dom";

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

describe("PerformanceChart", ()=>{

    let component 
    let store 
    let connected_react_component

    beforeEach(()=>{
                
        store = mockStore( fake_store_with_data );
    
        component = renderer.create(
            <Provider store={store} >
               <Router >
                   <PerformanceChart pathname={"/"} />
               </Router>
           </Provider>)

        connected_react_component = component.root.children[0].children[0].children[0].children[0]._fiber.stateNode

    })

    it('1) renders successfully with data from redux store', ()=>{

        let tree = component.toJSON();
        
        expect(tree).toMatchSnapshot();
    })

    it("2) renders a LineChart componentwhen props.portfolio.historical is defined", ()=>{

        let chart = component.root.find(node => node.type.name === "CategoricalChartWrapper")

        expect(chart).toBeTruthy()
    })    
})


describe("PerformanceChart", ()=>{

    let component 
    let store 
    let connected_react_component

    beforeEach(()=>{
                
        store = mockStore( fake_store_without_data );
    
        component = renderer.create(
            <Provider store={store} >
               <Router >
                   <PerformanceChart pathname={"/"} />
               </Router>
           </Provider>)

        connected_react_component = component.root.children[0].children[0].children[0].children[0]._fiber.stateNode

    })
    
    it("3) does not render a LineChart when props.portfolio.historical is not defined", ()=>{

        let chart = component.root.findAll(node => node.type.name === "CategoricalChartWrapper")

        expect(chart.length).toEqual(0)
    })

    it("4) if props.portfolio.historical is not defined, renders Loading Dots", ()=>{

        let chart = component.root.find(node => node.type.name === "LoadingDots")

        expect(chart).toBeTruthy()

    })
    
})