import { hydrate } from 'react-dom';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { loadableReady } from '@loadable/component';
import { Provider } from 'react-redux';

import configureStore from '@store';
import GlobalStyle from '@styles/GlobalStyle';
import App from './App';
import { ApolloProvider, ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

const store = configureStore();
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'https://api.spacex.land/graphql'
  })
});

loadableReady(() => {
  const rootElement = document.getElementById('root');
  hydrate(
    <ApolloProvider client={client}>
      <Provider store={store}>
        <BrowserRouter>
          <>
            <GlobalStyle />
            <App />
          </>
        </BrowserRouter>
      </Provider>
    </ApolloProvider>,
    rootElement,
  );
});

if (module.hot) {
  module.hot.accept();
}
