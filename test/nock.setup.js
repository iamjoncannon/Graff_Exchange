const nock = require('nock')

function nocked(data){

    nock("http://localhost:3000")
            .defaultReplyHeaders({ 'access-control-allow-origin': 
                                    '*', 'access-control-allow-headers': 'Authorization' })
            .intercept("/graphql", "options")
            .reply(200)

    return  nock("http://localhost:3000")
                 .post("/graphql")
                 .reply(200, data )
                 .log(console.log)

}

module.exports = nocked
