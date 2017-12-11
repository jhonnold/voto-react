import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginPage from '../login';

export default () => (
  <Switch>
    <Route component={LoginPage} />
  </Switch>
);
