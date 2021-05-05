import { ApolloClient, InMemoryCache, HttpLink, from } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { setContext } from '@apollo/client/link/context';
import { TABETALT_API_URI } from '../config';
import { auth } from '../firebase';

const httpLink = new HttpLink({
  uri: TABETALT_API_URI,
});

const errorMiddleware = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, path }) =>
      console.error(`[GraphQL error]: Message: ${message}, Path: ${path}`)
    );

  if (networkError) console.error(`[Network error]: ${networkError}`);
});

const authLink = setContext((_, { headers }) => {
  return auth.currentUser
    ?.getIdToken()
    .then(function (idToken) {
      return {
        headers: {
          ...headers,
          Authorization: idToken ? `${idToken}` : '',
        },
      };
    })
    .catch(function () {
      return headers;
    });
});

const cache = new InMemoryCache();

const gqlClient = new ApolloClient({
  link: from([authLink, errorMiddleware, httpLink]),
  cache,
});

export default gqlClient;
