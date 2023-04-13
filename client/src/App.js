import React from "react";
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    createHttpLink,
  } from '@apollo/client';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { setContext } from '@apollo/client/link/context';
import Hello from './pages/Hello';
import Store from './pages/Store';
import WelcomePage from './pages/WelcomePage';
import Nav from './components/Nav';
import Signup from './pages/Signup'

const httpLink = createHttpLink({
    uri: '/graphql',
  });

  const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('id_token');
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
  });

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});

function App() {

return (
    <ApolloProvider client={client}>
        <Router>
            <Nav />
            <Routes>
                <Route
                    path='/WelcomePage'
                    element={<WelcomePage />}
                />
                <Route
                    path='/Hello'
                    element={<Hello />}
                />
                <Route
                    path='/Signup'
                    element={<Signup />}
                />
                <Route
                    path='/Store'
                    element={<Store />}
                />
            </Routes>
        </Router>
    </ApolloProvider>
)
};

export default App;
