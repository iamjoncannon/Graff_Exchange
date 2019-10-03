import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import IndivNav from './IndivNav'
import { mount, shallow } from 'enzyme'
import configureStore from 'redux-mock-store';
import thunk from "redux-thunk"
const mockStore = configureStore([thunk]);
import { hydrateSinglePortfolioPage } from "../../../store/Portfolio/thunks_for_Portfolio"
import nocked from "../../../test/nock.setup.js"
import { BrowserRouter as Router } from "react-router-dom";

/*

tests

unit test (display)- 

renders a span with the selected portfolio item and an 
angle down icon 
    - if you click, sets state to symbol selector modal

renders a span that says Trade 
    - if you click on Trade, sets state to Trade modal

if cell, renders an "fa-bars" icon, 
    - if you click, sets state to page selector modal 

if not cell, 
    renders a holder div with a specific length
    renders an Indiv Selector component

integration tests- 

if historical not defined, and viewport is cell phone,
calls hydrateSinglePortfolioPage with fake data
and dispatches to the store 

* if modal showing

renders container

    - if you click the container, it exits the modal

    if modal is page, 
        renders individual selector
        - if you click on indiv exit, it exits the modal

    if modal is trade, 
        renders trade box
        - if you click on trade exit, it exits the modal
        
    if modal is symbol, 
        renders div 
        - if clicked, handlesymbol selector callback and setstate
        to modal false 
        renders list of portfolio's symbols


*/

const fake_store_with_historical_data =  { 

    Portfolio_state: {
        portfolio: {
            FB: {
                symbol: "FB",
                historical: []
            },
            GOOGL: {

            },
            AAPL: {

            }
        },
        selectedPortfolioItem: "FB"
    }, 
    User_state: {

        balance: 0
    }
}

const fake_store_without_historical_data =  { 

    Portfolio_state: {
        portfolio: {
            FB: {
                symbol: "FB",
                historical: []
            }
        },
        selectedPortfolioItem: "FB"
    }, 
    User_state: {

        balance: 0
    }
}

describe("IndivNav", ()=>{

    let component 
    let connected_react_component
    let store 

    beforeEach(()=>{
        
        store = mockStore( fake_store_with_historical_data );

        component = renderer.create(
            <Provider store={store} >
                <Router >
                    <IndivNav location={{pathname: "/"}}/>
                </Router>
            </Provider>
        );

        // the actual component is contained within several wrappers
        connected_react_component = component.root.children[0].children[0].children[0].children[0]._fiber.stateNode
    })

    it('1) renders successfully with data from redux store', ()=>{

        expect(true).toBeTruthy()

        let tree = component.toJSON();
        
        expect(tree).toMatchSnapshot();
    })

    it("2) renders a span with the selected portfolio item and an angle down icon", ()=>{
        
        let className = "fas fa-angle-down fa-7x"
    
        let angle = component.root.find(node => node.props.className === className  )

        expect(angle).toBeTruthy()

        let sibling = angle.parent.props.children[0]

        expect(sibling.props.children).toEqual("FB")   
    })
    
    it("3) clicking the angle's parent div sets state to symbol selector modal",()=>{

        let className = "fas fa-angle-down fa-7x"
    
        let angle = component.root.find(node => node.props.className === className  )

        renderer.act(()=>{

            angle.parent.props.onClick()
        })

        expect(connected_react_component.state.isModalShowing).toEqual(true)
        expect(connected_react_component.state.whichModal).toEqual('symbol-selector')
    })

    it("4) renders a span containing 'Trade'", ()=>{
        
        let trade_span = component.root.find(node => node.props.children === "Trade")

        expect(trade_span).toBeTruthy()
        expect(trade_span.type).toEqual("span")
    })
    
    it("5) clicking trade sets state to Trade modal", ()=>{
        
        let trade_span = component.root.find(node => node.props.children === "Trade")

        renderer.act(()=>{

            trade_span.props.onClick()
        })

        expect(connected_react_component.state.isModalShowing).toEqual(true)
        expect(connected_react_component.state.whichModal).toEqual('trade-box')
    })
    
    it("6) if not cell viewport, renders Indiv Selector component", ()=> {
    
        let indiv_selector = component.root.find( node => node.type.name === "IndivSelector")

        expect(indiv_selector).toBeTruthy()
    })

})

describe("IndivNav", ()=>{

    let component 
    let connected_react_component
    let store 

    beforeEach(()=>{
        
        window.outerWidth = 600

        store = mockStore( fake_store_with_historical_data );

        component = renderer.create(
            <Provider store={store} >
                <Router >
                    <IndivNav location={{pathname: "/"}}/>
                </Router>
            </Provider>
        );

        // the actual component is contained within several wrappers
        connected_react_component = component.root.children[0].children[0].children[0].children[0]._fiber.stateNode
    })

    it(">> if cell viewport <<", ()=>{})

    it("7) renders bars icon", ()=>{

        const className = "fas fa-bars fa-7x" 

        const bars = component.root.find(node => node.props.className === className  )

        expect(bars).toBeTruthy()
    })

    it("8) if props.portfolio.historical is defined, does not call hydrateSinglePortfolioPage", ()=>{

        store.dispatch( hydrateSinglePortfolioPage("FB") )
            .then(()=> {
                
                expect(dispatched_actions.length).toEqual(1)
                    
                done()
            })             
    })
})

describe("IndivNav", ()=>{

    let component 
    let connected_react_component
    let store 

    beforeEach(()=>{
        
        window.outerWidth = 600

        store = mockStore( fake_store_without_historical_data );

        component = renderer.create(
            <Provider store={store} >
                <Router >
                    <IndivNav location={{pathname: "/"}}/>
                </Router>
            </Provider>
        );

        // the actual component is contained within several wrappers
        connected_react_component = component.root.children[0].children[0].children[0].children[0]._fiber.stateNode
    })

    it("9) if historical not defined, calls hydrateSinglePortfolioPage", ()=>{

        store.dispatch( hydrateSinglePortfolioPage("FB") )
            .then(()=> {
                
                expect(dispatched_actions.length).toEqual(2)
                expect(dispatched_actions[0].type).toEqual(dispatched_actions[1].type)
                    
                done()
            })   
    })
})

describe("IndivNav", ()=>{

    let component 
    let connected_react_component
    let store 

    beforeEach(()=>{
        
        window.outerWidth = 600

        store = mockStore( fake_store_with_historical_data );

        component = renderer.create(
            <Provider store={store} >
                <Router >
                    <IndivNav location={{pathname: "/"}}/>
                </Router>
            </Provider>
        );

        // the actual component is contained within several wrappers
        connected_react_component = component.root.children[0].children[0].children[0].children[0]._fiber.stateNode
    })

    it(">> if modal showing <<", ()=>{})

    it("10) if modal is page-selector, renders individual selector", ()=>{

        renderer.act(()=>{

            connected_react_component.setState({ isModalShowing: true, whichModal: "page-selector" }) 
         
        })

        let indiv_selector = component.root.find( node => node.type.name === "IndivSelector")
 
        expect(indiv_selector).toBeTruthy()
    })

    it("11) clicking individual selector exit prop closes the modal", ()=>{

        renderer.act(()=>{

            connected_react_component.setState({ isModalShowing: true, whichModal: "page-selector" }) 
        })
        
        let indiv_selector = component.root.find( node => node.type.name === "IndivSelector")
        
        renderer.act(()=>{

            indiv_selector.props.exit()
        })
 
        expect(connected_react_component.state.isModalShowing).toEqual(false)
    })

    it("12) if modal is trade-box, renders trade box", ()=>{

        renderer.act(()=>{

            connected_react_component.setState({ isModalShowing: true, whichModal: 'trade-box' }) 
        })
        
        let trade_box = component.root.find( node => node.type.name === "TradeBox")

        expect(trade_box).toBeTruthy()
        
    })

    it("13) clicking trade box exit prop closes the modal", ()=>{

        renderer.act(()=>{

            connected_react_component.setState({ isModalShowing: true, whichModal: 'trade-box' }) 
        })
        
        let trade_box = component.root.find( node => node.type.name === "TradeBox")
        
        renderer.act(()=>{

            trade_box.props.exit()
        })
 
        expect(connected_react_component.state.isModalShowing).toEqual(false)
    })

    it("14) if modal is symbol-selector, renders div with list of portfolio's symbols", ()=>{
        
        renderer.act(()=>{

            connected_react_component.setState({ isModalShowing: true, whichModal: 'symbol-selector' }) 
        })

        let elements = component.root.findAllByType( "span" ).map(el=>el.props.children)
                
        expect(elements.includes("AAPL")).toBeTruthy()
        expect(elements.includes("GOOGL")).toBeTruthy()
        expect(elements.includes("FB")).toBeTruthy()
    })

    it("15) clicking the div sets state to modal false", ()=>{

        renderer.act(()=>{

            connected_react_component.setState({ isModalShowing: true, whichModal: 'symbol-selector' }) 
        })

        let final_div = component.root.findAllByType("div")

        renderer.act(()=>{

            final_div[final_div.length-1].props.onClick({target: {textContent: null}})
        })
        
        expect(connected_react_component.state.isModalShowing).toBe(false)
    })
})
