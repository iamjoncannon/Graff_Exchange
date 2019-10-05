import User_reducer from './reducer_for_User'

describe("reducer_for_User", ()=>{

    it("LOGIN reducer sets User state with action payload and sets isLoggedIn to true", ()=>{

        const payload = {
            token: "this is the token",
            balance: 48810.7,
            email: "moneybags@graff.app",
            first_name: "Money",
            holdings: [{user_data:{ current_holding: 1,symbol: "GOOGL",}}]    
        }

        const action = { type: "LOGIN", payload}

        let next_state = User_reducer({},action)

        expect(next_state.balance).toEqual(48810.7)
        expect(next_state.email).toEqual("moneybags@graff.app")
        expect(next_state.first_name).toEqual("Money")
        expect(next_state.isLoggedIn).toEqual(true)
    })

    it("LOGIN reducer stores token in localStorage", ()=>{

        let token = localStorage.getItem("token")

        expect(token).toEqual("this is the token")
    })


    it("LOGIN reducer returns landing_page_error if invalid user returned from server", ()=>{

        const payload = { graphQLErrors: true, message: "unable to find user" }
        const action = { type: "LOGIN", payload}

        let next_state = User_reducer({},action)

        expect(next_state.landing_page_error).toBeTruthy()
    })

    it("LOGIN reducer returns landing_page_error if invalid password return from server", ()=>{

        const payload = { graphQLErrors: true, message: "Invalid password" }
        const action = { type: "LOGIN", payload}

        let next_state = User_reducer({},action)

        expect(next_state.landing_page_error).toBeTruthy()
    })

    it("LOGOUT reducer sets isLoggedIn to false", ()=>{

        const action = { type: "LOGOUT"}

        let next_state = User_reducer({},action)

        expect(next_state.isLoggedIn).toEqual(false)
    })

    it("Portfolio MAKETRADE action updates balance in user state", ()=>{

        const payload = { transaction_result: { balance: 0 }}

        const action = { type: "MAKETRADE", payload}

        let next_state = User_reducer({},action)

        expect(next_state.balance).toEqual(0)
    })
})
