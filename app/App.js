import React from 'react';
import LoadingBar from 'react-redux-loading-bar';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { blue, orange } from 'material-ui/colors';
import { injectGlobal } from 'styled-components';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';

import { configureStore, history } from './redux';
import rootSaga from './redux/sagas';
import Routes from './pages/routes';

const { persistor, store } = configureStore();
store.runSaga(rootSaga);

// eslint-disable-next-line
injectGlobal`
  html, body {
    padding: 0;
    margin: 0;
    height: 100%;
    width: 100%;
  }

  #root {
    height: 100%;
    background: linear-gradient(to bottom, #EEEEEE, #CCCCCC);
  }
`;

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: orange,
  },
  overrides: {
    MuiButton: {
      raisedAccent: {
        color: 'white',
        background: `linear-gradient(to left, ${orange[400]}, ${orange[500]})`,
      },
    },
    MuiTypography: {
      colorAccent: { color: 'white' },
    },
  },
});

const Root = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <ConnectedRouter history={history}>
        <MuiThemeProvider theme={theme}>
          <LoadingBar style={{ background: `linear-gradient(to left, ${orange[300]}, ${orange[700]})` }} />
          <Routes />
        </MuiThemeProvider>
      </ConnectedRouter>
    </PersistGate>
  </Provider>
);

export default Root;
