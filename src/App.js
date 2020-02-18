import React, { useState } from 'react';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { WebSocketLink } from 'apollo-link-ws';
import { ApolloProvider } from 'react-apollo';

import Header from './components/Header';
import VSlider from './components/VSlider';
import BetInput from './components/BetInput';
import BetTable from './components/BetTable';
import Clam from './components/Clam';

import './App.css';

const wsLink = new WebSocketLink({
  uri: 'ws://gambilife.com/graphql',
  options: {
    reconnect: true,
  },
});

const client = new ApolloClient({
  link: wsLink,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Header/>
      <div className="container">
        <div className="slider-section">
          <VSlider min={0} max={100} decimal={2}/>
          <BetInput/>
        </div>
        <div className="table-section">
          <div className="table-container">
            <BetTable />
          </div>
        </div>
        <div className="bet-section">
          <div className="bet-scontainer">
            <Clam/>
          </div>
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
