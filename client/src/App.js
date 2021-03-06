
import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider} from 'react-apollo';
import Launches from './components/Launches';
import "./App.css";
import logo from "./logo.png";

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
})

function App() {
  return (
    <ApolloProvider client={client}>
    <div className="App">
      <img src={logo} alt="SpaceX" style={{width:300, margin: '0 auto'}} />
   <Launches/>
    </div>
    </ApolloProvider>
  );
}

export default App;
