import Portfolio_reducer from './reducer_for_Portfolio'

describe("reducer_for_Portfolio", ()=>{

    it("User_actions.LOGIN reducer receives holdings array and converts to portfolio object where key is stock symbol and value is remainder of holding", ()=>{

        const payload = {
            balance: 48810.7,
            email: "moneybags@graff.app",
            first_name: "Money",
            holdings: [{user_data:{ current_holding: 1,symbol: "GOOGL",}}]    
        }
        
        const action = { type: "LOGIN", payload}
        
        let next_state = Portfolio_reducer({},action)
        
        expect(next_state.portfolio.GOOGL).toBeTruthy()
        expect(next_state.portfolio.GOOGL.current_holding).toEqual(1)    
    })

    it("User_actions.LOGIN returns token_error state property if received",()=>{

        const payload = "Context creation failed: token invalid: "

        const action = { type: "LOGIN", payload}

        let next_state = Portfolio_reducer({},action)

        expect(next_state.token_error).toBeTruthy()
    })

    it("User_actions.LOGIN returns token_error state property if received",()=>{
    
        const payload = { graphQLErrors: "whoops"}

        const action = { type: "LOGIN", payload}

        let next_state = Portfolio_reducer({},action)

        expect(next_state).toEqual({})
    })

    it("actions.HYDRATEPORTFOLIO reducer receives holdings array and converts to portfolio object where key is stock symbol and value is remainder of holding", ()=>{

        const payload = {
            balance: 48810.7,
            email: "moneybags@graff.app",
            first_name: "Money",
            holdings: [{user_data:{ current_holding: 1,symbol: "GOOGL",}}]    
        }
        
        const action = { type: "LOGIN", payload}
        
        let next_state = Portfolio_reducer({},action)
        
        expect(next_state.portfolio.GOOGL).toBeTruthy()
        expect(next_state.portfolio.GOOGL.current_holding).toEqual(1)    
    })

    it("actions.HANDLESOCKETMESSAGE receives stock update and appends to portfolio", ()=>{

        const payload = {symbol: "FB", "price": 100}

        const action = {type: "HANDLESOCKETMESSAGE", payload}

        let next_state = Portfolio_reducer({portfolio: { FB: {}}},action)

        expect(next_state.portfolio.FB.price).toEqual(100)
    })

    it("actions.HANDLENEWS relays news object to portfolio", ()=>{

        const payload = {symbol: "FB", "news": "This is a news object"}

        const action = {type: "HANDLENEWS", payload}

        let next_state = Portfolio_reducer({portfolio: { FB: {}}},action)

        expect(next_state.portfolio.FB.news).toEqual("This is a news object")

    })

    it("actions.HANDLEFINANCIALS relays financials object to portfolio", ()=>{

        const payload = {symbol: "FB", "quarterly_financials": "This is a financials object"}

        const action = {type: "HANDLEFINANCIALS", payload}

        let next_state = Portfolio_reducer({portfolio: { FB: {}}},action)

        expect(next_state.portfolio.FB.financials).toEqual("This is a financials object")

    })

    it("actions.HANDLEHISTORICALPRICE relays financials object to portfolio", ()=>{

        const payload = {symbol: "FB", "historical": "This is a historical object"}

        const action = {type: "HANDLEHISTORICALPRICE", payload}

        let next_state = Portfolio_reducer({portfolio: { FB: {}}},action)

        expect(next_state.portfolio.FB.historical).toEqual("This is a historical object")

    })

    it("actions.HANDLESYMBOLSELECT sets selectedPortfolioItem", ()=> {

        const payload = "FB"

        const action = {type: "HANDLESYMBOLSELECT", payload}

        let next_state = Portfolio_reducer( { selectedPortfolioItem: "GOOGL" } , action)
        
        expect(next_state.selectedPortfolioItem).toEqual("FB")
    })

    it("User_actions.LOGOUT resets state",()=>{

        const initialState = { selectedPortfolioItem: {},
                            portfolio: {},
                            transactionHistory: {},
                            token_error: false }

        let next_state = Portfolio_reducer( { } , { type: "LOGOUT" })

        expect(next_state).toEqual(initialState)
    })
})


describe("reducer_for_Portfolio", ()=>{

    let next_state
    let payload

    beforeEach(()=>{

         payload = {
            transaction_result:{
                balance: 45242.41,
                new_holding: 4,
                symbol: "GOOGL",
                transaction: {
                    date_conducted: "1570166362098",
                    price: 1189.43,
                    quantity: 3,
                    symbol: "GOOGL",
                    type: "Buy"
                }
            }
        }

        const action = { type: "MAKETRADE", payload}

        next_state = Portfolio_reducer({transactionHistory: []},action)

    })

    it("actions.MAKETRADE receives trade result and updates current holding of stock", ()=>{

        expect(next_state.portfolio.GOOGL.current_holding).toEqual(payload.transaction_result.new_holding)
    })

    it("actions.MAKETRADE appends received transaction to current transaction history", ()=>{

        expect(next_state.transactionHistory[0]).toEqual(payload.transaction_result.transaction)
    })
})

