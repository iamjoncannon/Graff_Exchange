import { ApolloClient, ApolloLink, InMemoryCache, HttpLink } from 'apollo-boost';
import fetch from 'unfetch';

const httpLink = process.env.NODE_ENV === "test" ? new HttpLink({ uri: 'http://localhost:3000/graphql', fetch: fetch }) : new HttpLink({});

// const httpLink = new HttpLink({});

const authLink = new ApolloLink((operation, forward) => {

  const token = localStorage.getItem('token');

  operation.setContext({
    headers: {
      authorization: `${token}`
    }
  });

  return forward(operation);
});

export default () => {

    return new ApolloClient({
        link: authLink.concat(httpLink), 
        cache: new InMemoryCache()
    });

}
