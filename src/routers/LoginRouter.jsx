import React from 'react';
import { Switch, Route } from 'react-router';
import NavBar from '../shared/components/NavBar';

export default props => [
  <NavBar {...props} key="NavBar" />,
  <Switch>
    <Route render={() => <div className="page-container grid-x">Text</div>} />
  </Switch>,
];
