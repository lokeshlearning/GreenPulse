import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client= new ApolloClient({
uri: "https://greenpulse-api-dev.azurewebsites.net/graphql/",
cache: new InMemoryCache(),
})