import React from 'react';
import { Provider } from 'react-redux';

import getStore from './redux';

import './shared/styles/global.scss';

const store = getStore();

export default () => (
  <Provider store={store}>
    <div>{JSON.stringify(store.getState())}</div>
  </Provider>
);
