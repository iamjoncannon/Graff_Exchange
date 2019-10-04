import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Socket from './Socket'
import configureStore from 'redux-mock-store';
import thunk from "redux-thunk"
import { BrowserRouter as Router } from "react-router-dom";
import { createMemoryHistory } from 'history'
const mockStore = configureStore([thunk]);

const store_setup = (store) => {

    return renderer.create(
        <Provider store={store} >
            <Router>    
               <Socket />
            </Router>
       </Provider>
       )
}

const fake_store = { Portfolio_state : {portfolio : {} }}

describe("Socket", ()=>{

    let component 
    let store 
    let connected_react_component

    beforeEach(()=>{

        store = mockStore( fake_store );
        component = store_setup(store)

        connected_react_component = component.root.children[0].children[0].children[0].children[0]._fiber.stateNode
    })

    it('1) renders successfully with data from redux store', ()=>{

        let tree = component.toJSON();
        
        expect(tree).toMatchSnapshot();
    })

    it('2) connects to the IEX socket api ', (done)=>{

       expect(connected_react_component.state.socket.io.opts.hostname).toEqual('ws-api.iextrading.com')
       done()
    })
    
    // i honestly have no idea how to test the rest of this
})