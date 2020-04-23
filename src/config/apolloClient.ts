import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from "apollo-link-http";
import { onError } from "apollo-link-error";
import { setContext } from "apollo-link-context";
import { ApolloLink } from "apollo-link";

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${ message }, Location: ${ locations }, Path: ${ path }`,
      ),
    );
  if (networkError) console.log(`[Network error]: ${ networkError }`);
})

const authLink = setContext((_, { headers }) => {
  const token = '73a6b409-6aab-42b8-9f88-c3f3879b9870';
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${ token }` : "",
    }
  }
})

const httpLink = createHttpLink({
  uri: 'http://localhost:9002/graphql'
})

const cache = new InMemoryCache();

const client = new ApolloClient({
  link: ApolloLink.from([errorLink, authLink, httpLink]),
  cache,
});

export { client };

