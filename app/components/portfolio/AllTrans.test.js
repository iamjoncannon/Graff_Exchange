import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import AllTrans from './AllTrans'
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


describe("AllTrans", ()=>{

    let component 
    let store 
    let connected_react_component

    beforeEach(()=>{
                
        store = mockStore( fake_store );
    
        component = renderer.create(
            <Provider store={store} >
               <Router >
                   <AllTrans pathname={"/"} />
               </Router>
           </Provider>)

        connected_react_component = component.root.children[0].children[0].children[0].children[0]._fiber.stateNode

    })

    it('1) renders successfully with data from redux store', ()=>{

        let tree = component.toJSON();
        
        expect(tree).toMatchSnapshot();
    })

    it("2) renders five title spans", ()=>{

        const className = "all-trans"

        let parent = component.root.find( node=> node.props.className === className)

        let spans = parent.props.children[1].props.children.map(child => child.props.children)
        
        expect(spans).toEqual( [ 'Type', 'Symbol', 'Quantity', '@Buy', 'Date' ])    
    })

    it("3) renders transaction history item in five spans", ()=>{

        const className = "_allTransItem"

        let parent = component.root.find( node=> node.props.className === className )

        expect(parent.props.children.length).toEqual(5)

        let spans = parent.props.children.map(node => node.props.children)
        
        console.log(spans)

        expect(spans).toEqual([ 'Buy', 'F', 100, [ '$', '10.33' ], 'Wed Jul 17 2019 ' ])
    })
})