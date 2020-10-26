import React from 'react';
import ReactDOM from 'react-dom';
import Test from './TEST';
import { ApolloProvider } from "@apollo/client";
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:1337/graphql',
  cache: new InMemoryCache()
});



function A() {
    return (
        <div>
            <React.StrictMode>
                <ApolloProvider client={client}>
                    <Test></Test>
                </ApolloProvider>
            </React.StrictMode>
        </div>
    )
}


export default A