import ApolloClient, { InMemoryCache } from 'apollo-boost';

const cache = new InMemoryCache();
const client = new ApolloClient({
  cache,
  uri: 'http://localhost:9002/graphql',
});

export { client };

