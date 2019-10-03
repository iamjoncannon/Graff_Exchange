import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import AddSymbolBox from './AddSymbolBox'
import configureStore from 'redux-mock-store';
import thunk from "redux-thunk"
const mockStore = configureStore([thunk]);
import { BrowserRouter as Router } from "react-router-dom";


describe("AddSymbolBox", ()=>{

    it("1) renders span with symbol", ()=>{


    })

    it("2) renders renders input element", ()=>{


    })

    it("3) renders button element", ()=>{


    })

    it("4) input onChange sets state.input ", ()=>{


    })

    it("5) if state.input is found in the symbol hash, sets state.stockname", ()=>{

    })

    it(">>> if state.stockname defined <<<", ()=>{})

    it("6) renders text in span", ()=>{


    })

    it("7) if the stock is not found in the portfolio, button's opacity style changes to .3", ()=>{


    })

    it("8) if the stock is not found in the portfolio, and user clicks submit, calls makeTradeThunk with the symbol and a blank order", ()=>{

    })
})