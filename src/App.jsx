import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Switch, Route } from 'react-router';

import getStore, { history } from './redux';

import './shared/styles/global.scss';

const store = getStore();

export default () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route render={() => <div>Test</div>} />
      </Switch>
    </ConnectedRouter>
  </Provider>
);
