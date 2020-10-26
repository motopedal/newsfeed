import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from "@apollo/client";
import { ApolloClient, InMemoryCache } from '@apollo/client';
import AppRouting from './AppRouting'


const client = new ApolloClient({
  uri: 'http://localhost:1337/graphql',
  cache: new InMemoryCache()
});



function App() {
    return (
        <div>
            <React.StrictMode>
                <ApolloProvider client={client}>
                    <AppRouting></AppRouting>
                </ApolloProvider>
            </React.StrictMode>
        </div>
    )
}


export default App