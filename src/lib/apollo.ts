import { ApolloClient, InMemoryCache } from "@apollo/client"; 

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.hygraph.com/v2/clf8pdf5709or01t92f61gfia/master",
  cache: new InMemoryCache()
})