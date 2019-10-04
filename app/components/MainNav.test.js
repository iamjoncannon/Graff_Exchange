import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import MainNav from './MainNav'
import configureStore from 'redux-mock-store';
import thunk from "redux-thunk"
const mockStore = configureStore([thunk]);
import { Router } from "react-router-dom";
import { createMemoryHistory } from 'history'

const fake_store = {
    User_state : {
        Name: "Jay",
        balance: 0, 
        token: ''
    }, 
    Portfolio_state : {
        portfolio: {

        }
    }
}

const store_setup = (store) => {

    const history = createMemoryHistory()

    history.push("/")
    
    return renderer.create(
    <Provider store={store} >
        <Router history={history}>    
            <MainNav location={ { pathname: "/"}}/>
        </Router>
    </Provider>
    );
}

describe("MainNav", ()=>{

    let component 
    let connected_react_component
    let store 

    beforeEach(()=>{
        
        window.outerWidth = 1101

        store = mockStore( fake_store );

        component = store_setup(store)

        connected_react_component = component.root.children[0].children[0].children[0].children[0]._fiber.stateNode
    })

    it('1) renders successfully with data from redux store', ()=>{

        let tree = component.toJSON();
        
        expect(tree).toMatchSnapshot();
    })

    it("2) if desktop, renders 'desk-nav' div with four spans",()=>{

        const desk_nav = component.root.find(node => node.props.className === "desk-nav")

        expect(desk_nav).toBeTruthy()

        expect(desk_nav.children.length).toEqual(4)
    })

    it("3) if desktop, renders spans containing Portfolio and Holdings",()=>{

        const spans = component.root.findAllByType('span').map(node => node.children[0])

        expect(spans.includes("Portfolio")).toBeTruthy()
        expect(spans.includes("Holdings")).toBeTruthy()
    })
    
    it("4) renders Socket component",()=>{

        const socket = component.root.find(node => node.type.name === "Socket")
    
        expect(socket).toBeTruthy()
    })
    
    it("5) renders fa-home and fa-chart icons",()=>{

        const icons = component.root.findAllByType("i").map(node => node.props.className)

        expect(icons.length).toEqual(2)
    })

    it("6) renders two React Router Link components",()=>{

        const links = component.root.findAll(node => node.type.displayName === "Link")

        expect(links.length).toEqual(2)
    })

    it("7) Portfolio Link redirects to /all/watchlist",()=>{

        const links = component.root.findAll(node => node.type.displayName === "Link")

        expect(links[0].props.to).toEqual('/all/watchlist')
    })
   
    it("8) Holding Link redirects to '/all/watchlist'",()=>{
        const links = component.root.findAll(node => node.type.displayName === "Link")

        expect(links[1].props.to).toEqual('/all/watchlist')
    })

})