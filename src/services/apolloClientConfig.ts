import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "http://localhost:4000/graphql", // Replace with your GraphQL server URI
  cache: new InMemoryCache(),
});
