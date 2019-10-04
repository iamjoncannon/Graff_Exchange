import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import App from './App'
import configureStore from 'redux-mock-store';
import thunk from "redux-thunk"
const mockStore = configureStore([thunk]);
import { Router } from "react-router-dom";
import { createMemoryHistory } from 'history'

const store_setup = (store, pathname) => {

    const history = createMemoryHistory()

    history.push(pathname)

    return renderer.create(
        <Provider store={store} >
           <Router history={history}>
               <App />
           </Router>
       </Provider>
       )
}

describe("app", ()=>{

    it('1) renders successfully with data from redux store', ()=>{
        
        const store = mockStore( {User_state : {isLoggedIn : false}} );
    
        const component = store_setup(store, "/")

        let tree = component.toJSON();
        
        expect(tree).toMatchSnapshot();
    })

    it('if props.location.pathname === "/", renders landing and footer components inside "app-container" div', ()=>{

        const store = mockStore( {User_state : {isLoggedIn : false}} );
    
        const component = store_setup(store, "/")

        const landing = component.root.find(node => node.type.name === "Landing")        
        
        const footer = component.root.find(node => node.type.name === "Footer")        
    
        expect(landing).toBeTruthy()
        
        expect(footer).toBeTruthy()
    })

    it('if not logged in, any path other than "/" redirects to "/"', ()=>{
        
        const store = mockStore( { User_state : {isLoggedIn : false} } );
    
        const component = store_setup(store, "/yada")

        const _router = component.root.find(node => node.type.name === "Router")
        
        expect(_router.props.history.location.pathname).toEqual("/")
    })

    it('>> if logged in <<', ()=>{})

    it('if path includes "/indiv", renders MainNav and IndivNav components', (done)=>{
        
        const store = mockStore( { User_state : { isLoggedIn : true },
                                   Portfolio_state :  { portfolio: {}}
                                 } 
                                );

        const component = store_setup(store, "/indiv")

        const MainNav = component.root.find(node => node.type.name === "MainNav")        
        
        expect(MainNav).toBeTruthy()
        
        const IndivNav = component.root.find(node => node.type.name === "IndivNav")        
    
        expect(IndivNav).toBeTruthy()

        done()
    })
    
    it('if path includes "/all", renders MainNav and AllNav components', (done)=>{

        const store = mockStore( { User_state : { isLoggedIn : true },
            Portfolio_state :  { portfolio: {}}
          } 
         );

        const component = store_setup(store, "/all")

        const MainNav = component.root.find(node => node.type.name === "MainNav")        

        expect(MainNav).toBeTruthy()

        const AllNav = component.root.find(node => node.type.name === "AllNav")        

        expect(AllNav).toBeTruthy()

        done()
    })
})