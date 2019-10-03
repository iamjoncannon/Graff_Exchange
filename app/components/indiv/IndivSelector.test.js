import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import IndivSelector from './IndivSelector'
import configureStore from 'redux-mock-store';
import thunk from "redux-thunk"
const mockStore = configureStore([thunk]);
import { BrowserRouter as Router } from "react-router-dom";

describe("IndivSelector", ()=>{

    let component 
    let store 

    beforeEach(()=>{
                
        store = mockStore( );
    
        component = renderer.create(
            <Provider store={store} >
               <Router >
                   <IndivSelector pathname={"/"} />
               </Router>
           </Provider>)
    })

    it('1) renders successfully with data from redux store', ()=>{

        let tree = component.toJSON();
        
        expect(tree).toMatchSnapshot();
    })

    it("2) renders four links with span children", ()=>{

        const links = component.root.findAll(node=> node.type.displayName === "Link")

        expect(links.length).toEqual(4)

        const spans = component.root.findAllByType("span")

        expect(spans.length).toEqual(4)
    })
})

describe("IndivSelector", ()=>{

    let component 
    let store 

    beforeEach(()=>{
                
        store = mockStore( );
    
        component = renderer.create(
            <Provider store={store} >
               <Router >
                   <IndivSelector pathname={"/perf"} />
               </Router>
           </Provider>)
    })

    it("3) if pathname includes abbreviation, className is 'selected' ", ()=>{

        const selected = component.root.find(node => node.props.className === "selected")

        console.log(selected.children)

        expect(selected.children[0]).toEqual(Performance)
    })
})
