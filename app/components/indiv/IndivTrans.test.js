import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import IndivTrans from './IndivTrans'
import configureStore from 'redux-mock-store';
import thunk from "redux-thunk"
const mockStore = configureStore([thunk]);
import { BrowserRouter as Router } from "react-router-dom";

const fake_store = {
    Portfolio_state: {
        transactionHistory : [{
            date_conducted: "Wed Jul 17 2019 20:13:21 GMT-0400 (Eastern Daylight Time)",
            id: "14",
            price: 10.329999923706055,
            quantity: 100,
            symbol: "F",
            type: "Buy"
        }],
        selectedPortfolioItem: "F"
    }
}

describe("IndivTrans", ()=>{

    let component 
    let store 
    let connected_react_component

    beforeEach(()=>{
                
        store = mockStore( fake_store );
    
        component = renderer.create(
            <Provider store={store} >
               <Router >
                   <IndivTrans pathname={"/"} />
               </Router>
           </Provider>)

        connected_react_component = component.root.children[0].children[0].children[0].children[0]._fiber.stateNode

    })

    it('1) renders successfully with data from redux store', ()=>{

        let tree = component.toJSON();
        
        expect(tree).toMatchSnapshot();
    })
    
    it("2) renders four title spans", ()=>{

        const className = "indiv-trans indiv-container"

        let parent = component.root.find( node=> node.props.className === className)

        let spans = parent.children[0].props.children.map(child => child.props.children)
        
        expect(spans).toEqual( ['Type', 'Quantity', 'Price', 'Date' ])
    })

    it("3) renders transaction history item with four spans", ()=>{

        const className = "indiv-trans indiv-container"

        let parent = component.root.find( node=> node.props.className === className)

        let spans = parent.children[1].props.children[0].props.children.map(child => child.props.children)

        expect(spans).toEqual([ 'Buy', 100, [ '$', 10.329999923706055 ], 'Wed Jul 17 2019 ' ])
  
    })
})
