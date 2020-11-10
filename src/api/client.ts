import { ApolloClient, InMemoryCache, HttpLink, from } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { TABETALT_API_URI } from '../config';

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

const cache = new InMemoryCache();

const gqlClient = new ApolloClient({
  link: from([errorMiddleware, httpLink]),
  cache,
});

export default gqlClient;
