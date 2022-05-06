import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from, ApolloLink, NormalizedCacheObject } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { GraphQLError } from 'graphql'
import Main from './components/Main';

const errorLink: ApolloLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
        graphQLErrors.map((error: GraphQLError) => {
            console.error(`Graphql error ${error.message}`);
        });
    }
});

const link: ApolloLink = from([
    errorLink,
    new HttpLink({ uri: "http://localhost:8080/graphql" }),
]);

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
    cache: new InMemoryCache(),
    link: link,
});


function App() {
    return (
        <ApolloProvider client={client}>
            <Main />
        </ApolloProvider>

    );
}

export default App;
