import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Switch, Route } from 'react-router';

import getStore, { history } from './redux';

import './shared/styles/global.scss';

async function init() {
  const store = await getStore();
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route render={() => <div>{JSON.stringify(store.getState())}</div>} />
        </Switch>
      </ConnectedRouter>
    </Provider>
  );
}

export default init;
