import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LoginPage from '../login';
import SignupPage from '../sign-up';

export default () => (
  <Switch>
    <Route exact path="/signup" component={SignupPage} />
    <Route exact path="/" component={LoginPage} />
  </Switch>
);
