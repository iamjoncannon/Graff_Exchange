import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import AllWatchlist from './AllWatchlist'
import configureStore from 'redux-mock-store';
import thunk from "redux-thunk"
const mockStore = configureStore([thunk]);
import { BrowserRouter as Router } from "react-router-dom";

describe("AllWatchlist", ()=>{

    it('1) renders successfully with data from redux store', ()=>{

        // let tree = component.toJSON();
        
        // expect(tree).toMatchSnapshot();
    })

    it("if token-error, renders error message ", ()=>{})
    it('if portfolio is defined, maps over array and generates "watchlist-item-container" div for each ', ()=>{})
    it("if this.state.edit each portfolio item has icon on side", ()=>{})
    it("clicking icon calls handleEdit callback  ", ()=>{})
    it("handleEdit sets new hideList in local storage and sets state with new hidelist ", ()=>{})
    it("when component mounts, sets state.hidelist to user's hide list in local storage ", ()=>{})
    it('if data is defined, renders "watchlist-item" div with six spans', ()=>{})
    it("if modal is showing, renders AddSymbolBox ", ()=>{})
    it("if AddSymbolBox exit prop is called, closes modal box ", ()=>{})

})