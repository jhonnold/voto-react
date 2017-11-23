import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { injectGlobal } from 'styled-components';

import { configureStore, history } from './redux';
import rootSaga from './redux/sagas';
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
store.runSaga(rootSaga);

const Root = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </PersistGate>
  </Provider>
);

export default Root;
