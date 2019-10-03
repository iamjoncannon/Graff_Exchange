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

describe("AllNav", ()=>{

    it('1) renders two React Router Link components with span children', ()=>{

        
        
    })

    it("2) if pathname is watchlist, className of Portfolio span is 'selected'", ()=>{

        
        
    })

    it("2) if pathname is transactions, className of Transactions span is 'selected'", ()=>{

        
        
    })
    
})