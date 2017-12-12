import React from 'react';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { blue, orange } from 'material-ui/colors';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';

import { configureStore, history } from './redux';
import rootSaga from './redux/sagas';
import Routes from './pages/routes';

const { persistor, store } = configureStore();
store.runSaga(rootSaga);

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: orange,
  },
  overrides: {
    MuiButton: {
      raisedAccent: { color: 'white' },
    },
  },
});

const Root = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <ConnectedRouter history={history}>
        <MuiThemeProvider theme={theme}>
          <Routes />
        </MuiThemeProvider>
      </ConnectedRouter>
    </PersistGate>
  </Provider>
);

export default Root;
