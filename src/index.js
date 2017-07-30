import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import {
  createStore,
  applyMiddleware
} from 'redux';
import {
  Provider
} from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import {
  ConnectedRouter,
  routerReducer,
  routerMiddleware,
} from 'react-router-redux';
import {
  Route,
} from 'react-router';
import logger from 'redux-logger';
import {
  MuiThemeProvider,
} from 'material-ui/styles';
import Root from './app/Root';
import './index.css';

const history = createHistory();
const routerMiddle = routerMiddleware(history);

let store = createStore(
  routerReducer,
  applyMiddleware(routerMiddle, logger)
);

const App = () => (
  <MuiThemeProvider>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Route path="/" component={Root} />
      </ConnectedRouter>
    </Provider>
  </MuiThemeProvider>
);


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
