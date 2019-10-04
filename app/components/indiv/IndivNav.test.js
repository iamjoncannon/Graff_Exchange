import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import IndivNav from './IndivNav'
import configureStore from 'redux-mock-store';
import thunk from "redux-thunk"
const mockStore = configureStore([thunk]);
import { hydrateSinglePortfolioPage } from "../../../store/Portfolio/thunks_for_Portfolio"
import { BrowserRouter as Router } from "react-router-dom";
import nocked from "../../../test/nock.setup.js"

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

const fake_api_data = { data: '[{"date":"2019-06-30","Revenue":"38944000000.0"}]', __typename: "Quarterly_Financials" }

const fake_endpoint = { data: { hydrate_quarterly_financials: fake_api_data } }


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

    afterEach(()=>{

        store.clearActions();
    })

    it(">> if cell viewport <<", ()=>{})

    it("7) renders bars icon", ()=>{

        const className = "fas fa-bars fa-7x" 

        const bars = component.root.find(node => node.props.className === className  )

        expect(bars).toBeTruthy()
    })

    it("8) if props.portfolio.historical is defined, does not call hydrateSinglePortfolioPage", ()=>{
        
        let dispatched_actions = store.getActions()
                
        expect(dispatched_actions.length).toEqual(0)             
    })
})

describe("IndivNav", ()=>{

    let component 
    let connected_react_component
    let store 

    beforeEach(()=>{
        
        window.outerWidth = 600

        nocked(fake_endpoint)
        
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

                const dispatched_actions = store.getActions()
                
                expect(dispatched_actions.length).toEqual(3)    
            })   
    })
})

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

    afterEach(()=>{

        store.clearActions();
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

    it("16) clicking the spans calls handleSymbolSelect action", ()=>{

        renderer.act(()=>{

            connected_react_component.setState({ isModalShowing: true, whichModal: 'symbol-selector' }) 
        })

        let final_div = component.root.findAllByType("div")

        renderer.act(()=>{

            final_div[final_div.length-1].props.onClick({target: {textContent: "AAPL"}})
        })

        let dispatched_actions = store.getActions()
        
        expect(dispatched_actions.length).toEqual(1)
    })
})