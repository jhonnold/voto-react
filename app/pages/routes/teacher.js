import React from 'react';
import { Route } from 'react-router-dom';

import AppBar from '../../components/teacher-app-bar';
import Drawer from '../../components/teacher-app-drawer';
import Home from '../teacher/home';

export default ({ match }) => ([
  <AppBar key="AppBar" />,
  <Drawer key="Drawer" />,
  <Route path={`${match.url}/home`} component={Home} key="Home" />,
]);
