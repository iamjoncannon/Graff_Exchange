import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import AllNav from './AllNav'
import configureStore from 'redux-mock-store';
import thunk from "redux-thunk"
const mockStore = configureStore([thunk]);
import { BrowserRouter as Router } from "react-router-dom";

/*

note- tests will be similar to IndivSelector 

*/

let component_setup = (store, pathname) => {

    return renderer.create(
        <Provider store={store} >
            <Router >
                <AllNav location={{pathname: pathname}}/>
            </Router>
        </Provider>
    );
}

describe("AllNav", ()=>{

    let component 
    let store 
    let connected_react_component

    beforeEach(()=>{
        
        store = mockStore( );

        component = component_setup(store, "/")

        connected_react_component = component.root.children[0].children[0].children[0].children[0]._fiber.stateNode
    })

    it('1) renders successfully with data from redux store', ()=>{

        expect(true).toBeTruthy()

        let tree = component.toJSON();
        
        expect(tree).toMatchSnapshot();
    })

    it('2) renders two React Router Link components with span children', ()=>{

        let links = component.root.findAll(node => node.type.displayName === "Link")
    
        expect(links.length).toEqual(2)
    })    
})

describe("AllNav", ()=>{

    let component 
    let store 
    let connected_react_component

    beforeEach(()=>{
        
        store = mockStore( );

        component = component_setup(store, "/watchlist")

        connected_react_component = component.root.children[0].children[0].children[0].children[0]._fiber.stateNode
    })

    it("3) if pathname is watchlist, className of Portfolio span is 'selected'", ()=>{

        const span = component.root.find(node =>node.type === "span" && node.props.className === "selected")
        
        expect(span.children[0]).toEqual("Portfolio")
    })
})

describe("AllNav", ()=>{

    let component 
    let store 
    let connected_react_component

    beforeEach(()=>{
        
        store = mockStore( );

        component = component_setup(store, "/transactions")

        connected_react_component = component.root.children[0].children[0].children[0].children[0]._fiber.stateNode
    })

    it("4) if pathname is transactions, className of Transactions span is 'selected'", ()=>{

        const span = component.root.find(node =>node.type === "span" && node.props.className === "selected")

        expect(span.children[0]).toEqual("Transactions")
    })
})
