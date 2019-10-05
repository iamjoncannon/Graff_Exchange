import * as thunks from "./thunks_for_User"
const nocked = require("../../test/nock.setup")

const api_payload = {"data":{"sign_up":{"email":"a@v.com","first_name":"a","last_name":"v","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwiaWF0IjoxNTcwMjU1MzAwLCJleHAiOjE1NzAzNDE3MDB9.sQO3vJ90OKmZtxy7P3PzJT4o6-sBpUterCa8-LJdAgQ","balance":50000,"holdings":[{"user_data":{"symbol":"GOOGL","current_holding":0,"__typename":"Holding_User_Data"},"ohlc_data":{"latestPrice":1210.96,"companyName":"Alphabet, Inc.","change":21.53,"changePercent":0.0181,"open":1194.29,"__typename":"Holding_OHLC_Data"},"__typename":"Holding"}],"transaction_history":[{"id":"42","type":"Buy","symbol":"GOOGL","quantity":0,"price":0,"date_conducted":"Sat Oct 05 2019 02:01:40 GMT-0400 (Eastern Daylight Time)","__typename":"Transaction"}],"__typename":"User_Profile"}}}

nocked( api_payload )
         
describe("thunks_for_User", ()=>{

    it("registerThunk calls API with first_name, last_name, email, password and dispatches login action", async (done)=>{
       
        const store = require("../../store/store").default

        await store.dispatch(thunks.registerThunk("Money", "Bags", "userone@user.com", "password"))
           
        const next_state = store.getState()

        expect(next_state.User_state.email).toBeTruthy()
        expect(next_state.User_state.first_name).toBeTruthy()
        expect(next_state.User_state.last_name).toBeTruthy()
        expect(next_state.User_state.token).toBeTruthy()
        expect(next_state.User_state.balance).toBeTruthy()
        done()
          
    })
    
    it("loginThunk calls API with email and password and dispatches login action",  (done)=>{

        const store = require("../../store/store").default

        store.dispatch(thunks.loginThunk("userone@user.com", "password"))
          
        const next_state = store.getState()

        expect(next_state.User_state.email).toBeTruthy()
        expect(next_state.User_state.first_name).toBeTruthy()
        expect(next_state.User_state.last_name).toBeTruthy()
        expect(next_state.User_state.token).toBeTruthy()
        expect(next_state.User_state.balance).toBeTruthy()
        done()    
    })
})
