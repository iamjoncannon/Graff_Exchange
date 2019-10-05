import * as thunks from "./thunks_for_Portfolio"
const nocked = require("../../test/nock.setup")

 const login_payload = {
        
            holdings: [{user_data:{ current_holding: 1,symbol: "GOOGL",}}]    
        }

describe("thunks_for_Portfolio", ()=>{

    let store 

    beforeEach(()=>{

        store = require("../../store/store").default
    })

    afterEach(()=>{

        store.dispatch({type: "LOGOUT"})
        store.dispatch({ type: "HYDRATEPORTFOLIO", payload: login_payload } )
    })

    it("hydratePortfolioThunk calls API with token and dispatches hydratePortfolio action", (done)=>{

        const api_data = {"data":{"hydrate_portfolio":{"holdings":[{"user_data":{"symbol":"GOOGL","__typename":"Holding_User_Data"},"ohlc_data":{"companyName":"Alphabet, Inc.","latestPrice":1189.43,"change":11.51,"changePercent":0.00977,"open":1183.95,"__typename":"Holding_OHLC_Data"},"__typename":"Holding"}],"__typename":"Portfolio"}}}
        
        nocked( api_data )
        
        store.dispatch(thunks.hydratePortfolioThunk("thisisthetoken"))
            .then(()=>{

                const next_state = store.getState()

                expect(next_state.Portfolio_state.portfolio.GOOGL).toBeTruthy()
                done()
            })    
    })

    it("hydrateSinglePortfolioPage calls API with symbol and dispatches handleNews, handleFinancials, handleHistoricalPrice actions", (done)=>{
        
        const api_data = {data: {
            all_individual_stock_data: {
                        news: [
                            {
                                date: "Thu, 03 Oct 2019 19:23:00 -0400",
                                image_url: "https://cdn.snapi.dev/images/v1/b/d/106163592-1570143168753screenshot2019-10-03at32606pm.png",
                                news_url: "https://www.cnbc.com/2019/10/03/google-wants-its-ai-to-disappear-in-your-clothes.html",
                                text: "The latest update is the clearest depiction of how Google is thinking of ambient computing, which the company describes as using computing without feeling tied to a physical phone.",
                                title: "Google wants its AI to disappear in your clothes",
                                __typename: "News_Story"
                            }
                        ],
                        quarterly_financials: {
                            data: '[{"date":"2019-06-30","Revenue":"38944000000.0","Revenue Growth":"0.1925"}]',
                            __typename: "Quarterly_Financials"
                        },
                        time_series: [
                            {
                                close: 1189.22,
                                date: "2019-10-03",
                                high: 1189.4,
                                low: 1173.915,
                                open: 1178.01,
                                __typename: "Time_Series_Data_Point" 
                            }
                        ],
                        __typename: "Individual_Stock_Data"
        }}}

        nocked( api_data )

        store.dispatch(thunks.hydrateSinglePortfolioPage("GOOGL"))
            .then(()=>{

                const next_state = store.getState()
                const updated_item = next_state.Portfolio_state.portfolio.GOOGL
                
                expect(updated_item.news).toBeTruthy()
                expect(updated_item.financials).toBeTruthy()
                expect(updated_item.historical).toBeTruthy()
                store.dispatch({type: "LOGOUT"})
                done()
            })    
    })

    it("hydrateNewsThunk calls API with symbol and dispatches handleNews action", (done)=>{
        
        const api_data = {"data":
                            {"hydrate_news": 
                                [
                                    {
                                        date: "Thu, 03 Oct 2019 19:23:00 -0400",
                                        image_url: "https://cdn.snapi.dev/images/v1/b/d/106163592-1570143168753screenshot2019-10-03at32606pm.png",
                                        news_url: "https://www.cnbc.com/2019/10/03/google-wants-its-ai-to-disappear-in-your-clothes.html",
                                        text: "The latest update is the clearest depiction of how Google is thinking of ambient computing, which the company describes as using computing without feeling tied to a physical phone.",
                                        title: "Google wants its AI to disappear in your clothes",
                                        __typename: "News_Story"
                                    }
                                ]
                            }   
                        }

        nocked( api_data )
        
        store.dispatch(thunks.hydrateNewsThunk("GOOGL"))
            .then(()=>{

                const next_state = store.getState()

                expect(next_state.Portfolio_state.portfolio.GOOGL.news).toBeTruthy()
              
                done()
            })    
    })

    

})