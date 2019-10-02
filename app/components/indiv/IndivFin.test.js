import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import IndivFin from './IndivFin'
import configureStore from 'redux-mock-store';
import thunk from "redux-thunk"
const mockStore = configureStore([thunk]);
import { hydrateQuarterlyFinancialsThunk } from "../../../store/Portfolio/thunks_for_Portfolio"
import nocked from "../../../test/nock.setup.js"

const fake_store_with_financials_defined =  { 
    Portfolio_state: {
        portfolio: {
            FB: {
                financials: [{
                    date: "9/3/15",
                    key: "value", 
                    otherkey: "otherValue"
                },
                {
                    date: "12/3/15",
                    key: "value in second financials", 
                    otherkey: "otherValue in second financials"
                }]

            }
        },
        selectedPortfolioItem: "FB"
    }
}

const fake_store_without_financials_defined =  { 

    Portfolio_state: {
        portfolio: {
            FB: {
   
            }
        },
        selectedPortfolioItem: "FB"
    }, 
}

const fake_store_with_no_financial_data =  { 

    Portfolio_state: {
        portfolio: {
            FB: {
                financials: []
            }
        },
        selectedPortfolioItem: "FB"
    }, 
}

describe("IndivFin", ()=>{

    let store;
    let component 
    let connected_react_component

    beforeEach(() => {

        store = mockStore( fake_store_with_financials_defined );

        component = renderer.create(
            <Provider store={store}>
                <IndivFin />
            </Provider>
        );

        connected_react_component = component.root.children[0].children[0]._fiber.stateNode
    });

    afterEach(()=>{

        store.clearActions();
    })

    test('1) renders successfully with data from redux store', () => {

        let tree = component.toJSON();
        
        expect(tree).toMatchSnapshot();
    });

    it("*if props.portfolio.financials is defined--", ()=>{ })

    it("    2) it renders a span containing the first item's date", () => {
        
        const target_className = "indiv-fin indiv-container"
                
        let target = component.root.find((node)=> node.props.className === target_className)
        
        target = target.props.children[0]

        expect(target.type).toEqual("span")
        
        expect(target.props.children).toEqual("9/3/15")
      
    });

    it("    3) it renders the key/value pairs in the portfolio state's financials object in spans", ()=>{

        let elements = component.root.findAllByType("span").map(el=>el.props.children)

        expect(elements.includes("key")).toBeTruthy()
        expect(elements.includes("value")).toBeTruthy()
        expect(elements.includes("otherkey")).toBeTruthy()
        expect(elements.includes("otherValue")).toBeTruthy()
    })

    it("    4) it does not call hydrateQuarterlyFinancialsThunk" , ()=>{

        let dispatched_actions = store.getActions()
            
        expect(dispatched_actions.length).toEqual(0)
    })

    it("    *if dataNav callback clicked", ()=>{})

    it("        5) calls dataSwitch to set state to new selectedDataNavItem" , ()=>{
        
        const dataNav = component.root.find(node => node.props.className === 'data-nav')

       renderer.act(() => {

          dataNav.children[1].props.onClick()
       });
    
       expect(connected_react_component.state.selectedDataNavItem).toEqual('12/3/15')
    })

    it("        6) renders selected quarterly financial report" , ()=>{
        
        const dataNav = component.root.find(node => node.props.className === 'data-nav')

       renderer.act(() => {

          dataNav.children[1].props.onClick()
       });

       const target_className = "indiv-fin indiv-container"

       let target = component.root.find(node => node.props.className === target_className)

       target = target.props.children

       let elements = component.root.findAllByType("span").map(el=>el.props.children)

        expect(elements.includes("value in second financials")).toBeTruthy()
        expect(elements.includes("otherValue in second financials")).toBeTruthy()
    })
})

describe("IndivFin", ()=>{

    let store 
    let component 

    beforeEach(  () => {

        const fake_api_data = { data: '[{"date":"2019-06-30","Revenue":"38944000000.0"}]', __typename: "Quarterly_Financials" }

        const fake_endpoint = { data: { hydrate_quarterly_financials: fake_api_data } }

        nocked(fake_endpoint)

        store = mockStore( fake_store_without_financials_defined );

        component = renderer.create(
            <Provider store={store}>
                <IndivFin />
            </Provider>
        );
    });

    afterEach(()=>{

        store.clearActions();
    })

    it("*if props.portfolio.financials is not defined", ()=>{} )
    
    it("    7) it displays loading dots while loading",()=>{

        const target_className = "loading-dots"

        const target = component.root.find(node=> node.props.className === target_className )
    
        expect(target).toBeTruthy()
    })

    it("    8) it calls hydrateQuarterlyFinancialsThunk with the selectedPortfolioItem", async (done) =>{

        store.dispatch( hydrateQuarterlyFinancialsThunk("FB") )
            .then(()=> {
                
                let dispatched_actions = store.getActions()
                
                expect(dispatched_actions[0].type).toEqual(dispatched_actions[1].type)
                expect(dispatched_actions[0].payload.data).toEqual(dispatched_actions[1].payload.data)
                
                done()
            })  
    })
})

describe("IndivFin", ()=>{

    let store 
    let component 

    beforeEach(  () => {

        store = mockStore( fake_store_with_no_financial_data );

        component = renderer.create(
            <Provider store={store}>
                <IndivFin />
            </Provider>
        );
    });

    afterEach(()=>{

        store.clearActions();
    })

    it("*if props.portfolio.financials has no data", ()=>expect(true).toBeTruthy())
    
    it("    9) renders a span stating 'Data Not Available'",  () =>{

        const target = component.root.find(node=> node.props.className === "error_message")
    
        expect(target).toBeTruthy()
    })
})