import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import AddSymbolBox from './AddSymbolBox'
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

const fake_api_data = {"data":{"make_trade_mutation":{"transaction_result":{"symbol":"GOOGL","balance":48810.7,"new_holding":1,"transaction":{"symbol":"GOOGL","quantity":1,"price":1189.3,"type":"Buy","date_conducted":"1570142046024","__typename":"Transaction"},"__typename":"Trade_Return_Data_Fields"},"__typename":"Trade_Return_Data"}}}

describe("AddSymbolBox", ()=>{

    let component 
    let store 
    let connected_react_component

    beforeEach(()=>{

        nocked(fake_api_data)
        store = mockStore( fake_store );
    
        component = renderer.create(
            <Provider store={store} >
               <Router >
                   <AddSymbolBox pathname={"/"} exit={()=>{}}/>
               </Router>
           </Provider>)

        connected_react_component = component.root.children[0].children[0].children[0].children[0]._fiber.stateNode

    })

    it('1) renders successfully with data from redux store', ()=>{

        let tree = component.toJSON();
        
        expect(tree).toMatchSnapshot();
    })

    it("2) renders span with symbol", ()=>{

        let span = component.root.find(node => node.type === "span" && node.props.children === "Symbol")

        expect(span).toBeTruthy()
    })

    it("3) renders input element", ()=>{

        let input = component.root.find(node=> node.type === "input" && node.props.type === "text")
 
        expect(input).toBeTruthy()
    })

    it("4) renders button element", ()=>{

        let button = component.root.find(node => node.type === "button")

        expect(button).toBeTruthy()
    })

    it("5) input onChange sets state.input ", ()=>{

        let input = component.root.find(node=> node.type === "input" && node.props.type === "text")

        renderer.act(()=>{

            input.props.onChange({target: {value: "FB"}})
        })

        expect(connected_react_component.state.input).toEqual("FB")
    })

    it("6) if state.input is found in the symbol hash, sets state.stockname", ()=>{
        
        let input = component.root.find(node=> node.type === "input" && node.props.type === "text")

        renderer.act(()=>{

            input.props.onChange({target: {value: "FB"}})
        })

        expect(connected_react_component.state.stockName).toEqual("Facebook Inc.")
    })

    it(">>> if state.stockname defined <<<", ()=>{})

    it("7) renders text in span", ()=>{

        renderer.act(()=>{

            connected_react_component.setState({stockName: "Facebook Inc."})
        })

        const stock_span = component.root.find(node => node.type === "span" && node.props.children === "Facebook Inc.")

       expect(stock_span).toBeTruthy()
    })

    it("8) if the stock is not found in the portfolio, button's opacity style changes to .3", ()=>{
        
        renderer.act(()=>{

            connected_react_component.setState({input: "yada"})
        })

        let button = component.root.find(node => node.type === "button")
        
        expect(button.props.style.opacity).toEqual(".3")
    })

    it("9) if the stock is not found in the portfolio, and user clicks submit, calls makeTradeThunk with the symbol and a blank order", ()=>{
        
        let button = component.root.find(node => node.type === "button")
        
        renderer.act(()=>{

            connected_react_component.setState({input: "GOOGL"})
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