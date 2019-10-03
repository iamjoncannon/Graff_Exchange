import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import TradeBox from './TradeBox'
import configureStore from 'redux-mock-store';
import thunk from "redux-thunk"
const mockStore = configureStore([thunk]);
import { BrowserRouter as Router } from "react-router-dom";
import { makeTradeThunk } from "../../../store/Portfolio/thunks_for_Portfolio"
import nocked from "../../../test/nock.setup.js"

const fake_store =  { 
    User_state: {
        balance: 100
    },
    Portfolio_state: {
        portfolio: {
            FB: {
                current_holding: 2,
                price: 100
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

const fake_api_data = {"data":{"make_trade_mutation":{"transaction_result":{"symbol":"GOOGL","balance":48810.7,"new_holding":1,"transaction":{"symbol":"GOOGL","quantity":1,"price":1189.3,"type":"Buy","date_conducted":"1570142046024","__typename":"Transaction"},"__typename":"Trade_Return_Data_Fields"},"__typename":"Trade_Return_Data"}}}

describe("TradeBox", ()=>{

    let component 
    let store 
    let connected_react_component

    beforeEach(()=>{

        nocked(fake_api_data)
        store = mockStore( fake_store );
    
        component = renderer.create(
            <Provider store={store} >
               <Router >
                   <TradeBox pathname={"/"} exit={()=>{}}/>
               </Router>
           </Provider>)

        connected_react_component = component.root.children[0].children[0].children[0].children[0]._fiber.stateNode

    })

    it('1) renders successfully with data from redux store', ()=>{

        let tree = component.toJSON();
        
        expect(tree).toMatchSnapshot();
    })

    it("2) renders a span with quantity", ()=>{

        let span = component.root.find(node => node.type === "span" && node.props.children === "Quantity")
    
        expect(span).toBeTruthy()
    })
    
    it("3) renders a number input", ()=>{

        let input = component.root.find(node=> node.type === "input" && node.props.type === "number")

        expect(input).toBeTruthy()
    })

    it('4) renders two buttons, one containing "Buy" and another containing "Sell"', ()=>{

        let buttons = component.root.findAll(node => node.type === "button")

        expect(buttons.length).toEqual(2)

        expect(buttons[0].props.children).toEqual("Buy")
        expect(buttons[1].props.children).toEqual("Sell")
    })

    it("5) input sets state.size with integer value", ()=>{

        let input = component.root.find(node=> node.type === "input" && node.props.type === "number")

        renderer.act(()=>{

            input.props.onChange({target: {value: 5}})
        })

        expect(connected_react_component.state.size).toEqual(5)
    })

    it("6) if attempting to sell, and order is larger than current holdings, does not call thunk and sets state with tooltip message", ()=>{
        
        let input = component.root.find(node=> node.type === "input" && node.props.type === "number")
        let button = component.root.find(node => node.type === "button" && node.props.children === "Sell")

        renderer.act(()=>{

            input.props.onChange({target: {value: 5}})
        })

        renderer.act(()=>{

            button.props.onClick()
        })

        const { isToolTipShowing, tooltipMessage } = connected_react_component.state

        expect(isToolTipShowing).toBeTruthy()
        expect(tooltipMessage).toEqual('Insufficient holdings to cover trade.')
   
    })

    it("7) if attempting to buy, and order is larger than current balance, does not call thunk and sets state with tooltip message", ()=>{
       
        let input = component.root.find(node=> node.type === "input" && node.props.type === "number")
        let button = component.root.find(node => node.type === "button" && node.props.children === "Buy")

        renderer.act(()=>{

            input.props.onChange({target: {value: 5}})
        })

        renderer.act(()=>{

            button.props.onClick()
        })

        const { isToolTipShowing, tooltipMessage } = connected_react_component.state

        expect(isToolTipShowing).toBeTruthy()
        expect(tooltipMessage).toEqual('Insufficient balance to cover trade.')
    })

    it("8) if valid order, calls makeTradeThunk", (done)=>{

        let input = component.root.find(node=> node.type === "input" && node.props.type === "number")
        let button = component.root.find(node => node.type === "button" && node.props.children === "Buy")

        renderer.act(()=>{

            input.props.onChange({target: {value: 1}})
        })

        renderer.act(()=>{

            button.props.onClick()
        })

        store.dispatch( makeTradeThunk({symbol: "GOOGL", quantity: 1, type: "Buy", price: 1189.3}) )
        .then(()=> {
            
            let dispatched_actions = store.getActions()
            expect(dispatched_actions.length).toEqual(2)    
            expect(dispatched_actions[0].type).toEqual(dispatched_actions[1].type)
            done()
        })   
    })
})


