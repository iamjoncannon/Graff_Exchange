import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import IndivTrans from './IndivTrans'
import configureStore from 'redux-mock-store';
import thunk from "redux-thunk"
const mockStore = configureStore([thunk]);
import { BrowserRouter as Router } from "react-router-dom";





describe("TradeBox", ()=>{

    it("1) renders a span with quantity", ()=>{


    })
    
    it("2) renders an input", ()=>{



    })

    it('3) renders two buttons, one containing "Buy" and another containing "Sell"', ()=>{



    })

    it("4) input sets state.size with integer value", ()=>{


    })

    it("5) if attempting to sell, and order is larger than current holdings, does not call thunk and sets state with tooltip message", ()=>{


    })

    it("6) if attempting to buy, and order is larger than current balance, does not call thunk and sets state with tooltip message", ()=>{


    })

    it("7) if valid order, calls makeTradeThunk", ()=>{


        
    })
})
