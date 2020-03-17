import {ApolloClient, HttpLink, InMemoryCache} from 'apollo-boost';

const API_URL = 'https://api.graphql.jobs/';

export default new ApolloClient({
  link: new HttpLink({uri: API_URL}),
  cache: new InMemoryCache(),
});
