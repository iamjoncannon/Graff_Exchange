import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import IndivNews from './IndivNews'
import configureStore from 'redux-mock-store';
import thunk from "redux-thunk"
const mockStore = configureStore([thunk]);
import { hydrateNewsThunk } from "../../../store/Portfolio/thunks_for_Portfolio"
import { BrowserRouter as Router } from "react-router-dom";
import nocked from "../../../test/nock.setup.js"

const fake_api_data = { 
    data: { 
        hydrate_news : 
                 [{
                date: "Wed, 02 Oct 2019 15:44:44 -0400",
                image_url: "https://cdn.snapi.dev/images/v1/k/0/etf24.jpg",
                news_url: "https://investorplace.com/2019/10/5-top-stock-trades-for-thursday-googl-xom-gm/",
                text: "Alphabet, Exxon Mobil, General Motors, Aphria and the Russell 2000 were our top stock trades to watch going into Thursday.",
                title: "5 Top Stock Trades for Thursday: GOOGL, XOM, GM, APHA & IWM",
                __typename: "News_Story"
                }]
    }
}

const fake_store_without_news_data =  {
 
    Portfolio_state: {
        portfolio: {
            FB: {
                symbol: "FB",
            }
        },
        selectedPortfolioItem: "FB"
    }
}

const fake_store_with_news_data =  {
 
    Portfolio_state: {
        portfolio: {
            FB: {
                symbol: "FB",
                news: fake_api_data.data.hydrate_news
            }
        },
        selectedPortfolioItem: "FB"
    }
}

const fake_store_with_blank_news_data =  {
 
    Portfolio_state: {
        portfolio: {
            FB: {
                symbol: "FB",
                news: []
            }
        },
        selectedPortfolioItem: "FB"
    }
}

const store_setup = (store) => {

    return renderer.create(
        <Provider store={store} >
           <Router >
               <IndivNews location={{pathname: "/"}}/>
           </Router>
       </Provider>
   );
}

describe("IndivNews", ()=>{

    let component 
    let store 

    beforeEach(()=>{
        
        nocked(fake_api_data)
        
        store = mockStore( fake_store_without_news_data );
    
        component = store_setup(store)

    })

    afterEach(()=>{

        store.clearActions();
    })

    it('1) renders successfully with data from redux store', ()=>{

        let tree = component.toJSON();
        
        expect(tree).toMatchSnapshot();
    })

    it("2) if not cell viewport and news not defined, calls hydrateNewsThunk", (done)=>{
       
        store.dispatch( hydrateNewsThunk("FB") )
        .then(()=> {
            
            let dispatched_actions = store.getActions()
            expect(dispatched_actions[0].type).toEqual(dispatched_actions[1].type)    
            done()
        })  
    })

    it("3) it displays loading dots while loading news from API",()=>{

        const target_className = "loading-dots"

        const target = component.root.find(node=> node.props.className === target_className )
    
        expect(target).toBeTruthy()
    })
})

describe("IndivNews", ()=>{

    let component 
    let store 

    beforeEach(()=>{
        
        nocked(fake_api_data)
        
        store = mockStore( fake_store_with_news_data );
    
        component = store_setup(store)

    })

    afterEach(()=>{

        store.clearActions();
    })

    it("4) if news is defined, does not call hydrateNewsThunk", (done)=>{

        store.dispatch( hydrateNewsThunk("FB") )
        .then(()=> {
            
            let dispatched_actions = store.getActions()
            expect(dispatched_actions.length).toEqual(1)    
            done()
        })  
    })

    it("5) renders spans with title, date, and text, and image from image_url", ()=>{

        let news_box = component.root.findAll( node => node.props.className === "news-box")

        expect(news_box.length).toEqual(1)

        let spans = news_box[0].props.children[0].props.children.map(child => child.type) 

        expect(spans.length).toEqual(3)

        expect(news_box[0].props.children[1].type).toEqual("img")
    })
})

describe("IndivNews", ()=>{

    let store 
    let component 

    beforeEach(  () => {

        store = mockStore( fake_store_with_blank_news_data );

        component = store_setup(store)
    });

    afterEach(()=>{

        store.clearActions();
    })
    
    it("6) if no news data from API, renders span saying data not available",  () =>{

        const target = component.root.find(node=> node.props.className === "error_message")
    
        expect(target).toBeTruthy()
    })
})
