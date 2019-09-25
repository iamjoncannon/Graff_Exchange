// import { ApolloClient } from 'apollo-client';
// import { InMemoryCache } from 'apollo-cache-inmemory';
// import { createHttpLink } from 'apollo-link-http';
import { urlPrefix } from "../secrets"

import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost'

module.exports = () => {

    return new ApolloClient({
        link: new HttpLink({uri: urlPrefix}),
        cache: new InMemoryCache()  
    })
}