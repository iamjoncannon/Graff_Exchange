import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import AllWatchlist from './AllWatchlist'
import configureStore from 'redux-mock-store';
import thunk from "redux-thunk"
const mockStore = configureStore([thunk]);
import { BrowserRouter as Router } from "react-router-dom";
import nocked from "../../../test/nock.setup.js"
import { connect } from 'tls';

const fake_api_data = {"data":
    {"hydrate_time_series_data":
        [{
            "date":"2019-10-02",
            "open":1206.42,
            "high":1206.42,
            "low":1173.37,
            "close":1176.985,
            "__typename":"Time_Series_Data_Point"
        }]
    }
}

const fake_store_with_data =  {
    User_state: {
        email: "yada@yada.com"
    },
    Portfolio_state: {
        token_error: "this is a token error",
        portfolio: {
            FB: {
                symbol: "FB",
                price: 100,
                current_holding: 5,
                historical: fake_api_data.data.hydrate_time_series_data,
                data: {
                    changePercent: .03,
                    latestPrice: 200
                }
            }
        },
        selectedPortfolioItem: "FB"
    }
}

const store_setup = (store) => {

    return renderer.create(
        <Provider store={store} >
           <Router >
               <AllWatchlist location={{pathname: "/"}}/>
           </Router>
       </Provider>
   );
}

describe("AllWatchlist", ()=>{

    let component 
    let store 
    let connected_react_component

    beforeEach(()=>{

        localStorage.setItem('yada@yada.com-hideList', '["GOOGL"]' ) 
                
        store = mockStore( fake_store_with_data );
    
        component = store_setup(store)
        connected_react_component = component.root.children[0].children[0].children[0].children[0]._fiber.stateNode
    })

    afterEach(()=>{

        store.clearActions();
    })

    it('1) renders successfully with data from redux store', ()=>{

        let tree = component.toJSON();
        
        expect(tree).toMatchSnapshot();
    })

    it('2) if portfolio is defined, maps over array and generates "watchlist-item-container" div for each', ()=>{
        
        const className = "watchlist-item-container"

        const divs = component.root.findAll(node => node.props.className === className)
    
        expect(divs).toBeTruthy()

        expect(divs.length).toEqual(1)
    })

    it('3) if data is defined, renders "watchlist-item" div with six spans', ()=>{
        
        const className = "watchlist-item"

        const parent = component.root.find(node => node.props.className === className)
    
        expect(parent).toBeTruthy()

        const spans = parent.props.children[0].props.children 

        expect(spans.length).toEqual(4)
    })
    
    it("4) if this.state.edit each portfolio item has edit icon on side", ()=>{

        renderer.act(()=>{

            connected_react_component.setState({edit: true})
        })

        const edit_icon = component.root.find(node => node.type === "i" && node.props.className.includes("plus") )

        expect(edit_icon).toBeTruthy()
    })
    
    it("5) clicking icon adds item symbol to hidelist", ()=>{
        
        renderer.act(()=>{

            connected_react_component.setState({edit: true})
        })

        const parent = component.root.find(node => node.props.className === "watchlist-item-container" )

        const icon = parent.props.children[0]

        renderer.act(()=>{

            icon.props.onClick()
        })

       expect(connected_react_component.state.hideList.includes("FB")).toBeTruthy()
    
    })
    
    it("6) handleEdit sets new hideList in local storage and sets state with new hidelist ", ()=>{

        renderer.act(()=>{

            connected_react_component.handleEdit(["", {symbol: "FB"}])
        })

        expect(localStorage).toEqual({ 'yada@yada.com-hideList': "[\"GOOGL\",\"FB\"]" })
    })
    
    it("7) when component mounts, sets state.hidelist to user's hide list in local storage ", ()=>{

        expect( localStorage.getItem('yada@yada.com-hideList') ).toEqual("[\"GOOGL\"]")
        
        expect(connected_react_component.state.hideList).toEqual(["GOOGL"])
    })
    
    it("8) if modal is showing, renders AddSymbolBox ", ()=>{

        renderer.act(()=>{

            connected_react_component.setState({isModalShowing: true})
        })       

        let box = component.root.find(node => node.type.name === "AddSymbolBox")

        expect(box).toBeTruthy()
    })
    
    it("9) if AddSymbolBox exit prop is called, closes modal box ", ()=>{

        renderer.act(()=>{

            connected_react_component.setState({isModalShowing: true})
        })

        let box = component.root.find(node => node.type.name === "AddSymbolBox")

        renderer.act(()=>{

            box.props.exit()
        })

        expect(connected_react_component.state.isModalShowing).toEqual(false)
    })
    
    it("10) if token-error, renders token error messages", ()=>{

        const errors = component.root.findAll(node => node.props.className === "error_message")
        
        expect(errors).toBeTruthy()
        expect(errors.length).toEqual(2)      
    })
})