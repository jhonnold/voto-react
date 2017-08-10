import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import {
  Provider,
} from 'react-redux';
import {
  ConnectedRouter,
} from 'react-router-redux';
import {
  Route,
} from 'react-router';
import {
  history,
  store,
} from './app/redux';
import {
  MuiThemeProvider,
} from 'material-ui/styles';
import Root from './app/Root';
import './index.css';

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
