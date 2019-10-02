const nock = require('nock')

function nocked(data){

    return  nock("http://localhost:3000")
                 .post("/graphql")
                 .reply(200, data )

}

module.exports = nocked
