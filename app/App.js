import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Route } from 'react-router-dom';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { injectGlobal } from 'styled-components';

import { configureStore, history } from './redux';
import App from './components/App';

injectGlobal([`
  body {
    height: initial;
    width: initial;
    margin: 0;
    padding: 0;
  }

  #root {
    height: 100%;
    overflow-x: hidden;
    min-height: 100vh;
    background-color: #fff;
  }
`]);

const { persistor, store } = configureStore();

const Root = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <ConnectedRouter history={history}>
        <Route path="/" component={App} />
      </ConnectedRouter>
    </PersistGate>
  </Provider>
);

export default Root;
