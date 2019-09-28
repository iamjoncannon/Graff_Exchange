import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost'

module.exports = () => {

    return new ApolloClient({
        link: new HttpLink({
            uri: "/graphql",
            headers: {
                Authorization: `${localStorage.getItem("token")}`
            }
        }),
        cache: new InMemoryCache()
    })
}