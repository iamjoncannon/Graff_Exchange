import { ApolloClient, ApolloLink, InMemoryCache, HttpLink } from 'apollo-boost';

const httpLink = new HttpLink({});

const authLink = new ApolloLink((operation, forward) => {

  const token = localStorage.getItem('token');

  operation.setContext({
    headers: {
      authorization: `${token}`
    }
  });

  return forward(operation);
});

module.exports = () => {

    return new ApolloClient({
        
        link: authLink.concat(httpLink), 
        cache: new InMemoryCache()
    });

}
