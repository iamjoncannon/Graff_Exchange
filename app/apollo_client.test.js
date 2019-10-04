import apollo_client from './apollo_client'
import nocked from '../test/nock.setup.js'
import gql from 'graphql-tag'

describe("apollo_client", ()=>{

    it("1) successfully generates an Apollo Client object",()=>{

        const client = apollo_client()

        expect(typeof client).toEqual("object")        
    })

    it("2) apollo client can perform GraphQL queries", (done)=>{

        const client = apollo_client()
        
        const fake_api_data = {"data":{"login":{"email":"moneybags@graff.app","__typename":"User_Profile"}}}
        
        nocked(fake_api_data)

        const query = gql`query login_call($email: String, $password: String) {
            login(email: $email, password: $password){
            email
           }
          }`

        const variables = {email: "moneybags@graff.app", password : "supersecret"}

        client.query({ query, variables }).then((response)=> {
        
            expect(response.data.login.email).toEqual('moneybags@graff.app')
            done()
        })
    })
})