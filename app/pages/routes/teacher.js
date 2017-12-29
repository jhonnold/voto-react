import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../teacher/home';

export default ({ match }) => (
  <Switch>
    <Route path={`${match.url}/home`} component={Home} />
  </Switch>
);
