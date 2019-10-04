import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Landing from './Landing'
import configureStore from 'redux-mock-store';
import thunk from "redux-thunk"
const mockStore = configureStore([thunk]);
import { BrowserRouter as Router } from "react-router-dom";
import { loginThunk, registerThunk } from "../../store/User/thunks_for_User.js";
import nocked from "../../test/nock.setup.js"

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

const fake_api_data = {"data":{"sign_up":{"email":"c@c.co","first_name":"j","last_name":"c","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywiaWF0IjoxNTcwMTU1ODQ0LCJleHAiOjE1NzAyNDIyNDR9.pZ2gy3h-ctD3OjD0Y92TJa253_DG_6ugp4cXuGOtfQg","balance":50000,"holdings":[{"user_data":{"symbol":"GOOGL","current_holding":0,"__typename":"Holding_User_Data"},"ohlc_data":{"latestPrice":1189.43,"companyName":"Alphabet, Inc.","change":11.51,"changePercent":0.00977,"open":1183.95,"__typename":"Holding_OHLC_Data"},"__typename":"Holding"}],"transaction_history":[{"id":"34","type":"Buy","symbol":"GOOGL","quantity":0,"price":0,"date_conducted":"Thu Oct 03 2019 22:24:04 GMT-0400 (Eastern Daylight Time)","__typename":"Transaction"}],"__typename":"User_Profile"}}}

const store_setup = (store) => {

    return renderer.create(
        <Provider store={store} >
           <Router >
               <Landing pathname={"/"} exit={()=>{}}/>
           </Router>
       </Provider>)
}

describe("Landing", ()=>{

    let component 
    let store 
    let connected_react_component

    beforeEach(()=>{

        nocked(fake_api_data)

        window.innerWidth = 1101

        store = mockStore( fake_store );
    
        component = store_setup(store)

        connected_react_component = component.root.children[0].children[0].children[0].children[0]._fiber.stateNode

    })

    it('1) renders successfully with data from redux store', ()=>{

        let tree = component.toJSON();
        
        expect(tree).toMatchSnapshot();
    })

    it("renders 'header' div with 'title' and 'blurb' divs", ()=>{

        const parent = component.root.find(node => node.props.className === "header")

        expect(parent).toBeTruthy()

        expect(parent.children[0].props.className).toEqual("title")
        expect(parent.children[1].props.className).toEqual("blurb")
    })

    it("renders a button with onClick", ()=>{

        const button = component.root.findByType("button")

        expect(button).toBeTruthy()
        expect(button.props.onClick).toBeTruthy()
    })
   
    // if sign up
    it(">> if sign up <<", ()=>{})

    it("renders a span with text: Already have an account?", ()=>{

        renderer.act(()=>{

            connected_react_component.setState({mode: "sign-up"})
        })

        let span = component.root.find(node => node.type === "span" && node.children[0] === ' Already have an account? ') 
    

        expect(span).toBeTruthy()    
    })
   
    it("renders a Sign In span with onClick callback ", ()=>{

        renderer.act(()=>{

            connected_react_component.setState({mode: "sign-up"})
        })

        let span = component.root.find(node => node.type === "span" && node.children[0] === 'Sign In') 

        expect(span).toBeTruthy() 
    })
   
    it("renders a form with five inputs ", ()=>{

        renderer.act(()=>{

            connected_react_component.setState({mode: "sign-up"})
        })

        const form = component.root.findAllByType("form")

        const inputs = component.root.findAllByType("input")

        expect(form.length).toEqual(1)
        expect(inputs.length).toEqual(5)
    })

    it("submit button calls handleRegister", ()=>{

        renderer.act(()=>{

            connected_react_component.setState({mode: "sign-up"})
        })

        const button = component.root.findByType("button")

        const fields = {firstName: 'a', 
                        lastName: "b", 
                        email: "a@b.com", 
                        password: "a", 
                        confirm_password: "a"}

        renderer.act(()=>{
           
            connected_react_component.setState(fields)
           
        })
        
        renderer.act(()=>{

            button.props.onClick()
        })    
        
        store.dispatch( registerThunk(fields) ).then(()=> {

            const dispatched_actions = store.getActions()            
            expect(dispatched_actions.length).toEqual(2)
            expect(dispatched_actions[0].type).toEqual(dispatched_actions[1].type)                
        }) 

    })

})