import { ApolloClient, from, InMemoryCache } from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';

const uploadClientLink = createUploadLink({
  uri: 'http://localhost:3000',
});

export const client = new ApolloClient({
  link: from([uploadClientLink]),
  cache: new InMemoryCache(),
});
