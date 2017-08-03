import React from 'react';
import {
  Route,
  Switch,
  Redirect
} from 'react-router';
import SessionListPage from '../containers/SessionListPage';

const SessionsRouter = (props) => {
  return (
    <Switch>
      <Route exact path={props.match.path} component={SessionListPage} />
      <Route exact path={`${props.match.path}/new`} component={SessionListPage} />
      <Route render={() => (
        <Redirect to={props.match.path} />
      )} />
    </Switch>
  );
};

export default SessionsRouter;
