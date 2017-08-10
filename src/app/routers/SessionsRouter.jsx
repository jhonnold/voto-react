import React from "react";
import PropTypes from "prop-types";
import { Route, Switch, Redirect } from "react-router";
import SessionListPage from "../containers/SessionListPage";
import SessionEditPage from "../containers/SessionEditPage";

export default function SessionsRouter(props) {
  return (
    <Switch>
      <Route exact path={props.match.path} component={SessionListPage} />
      <Route
        exact
        path={`${props.match.path}/:sessionId/edit`}
        component={SessionEditPage}
      />
      <Route render={() => <Redirect to={props.match.path} />} />
    </Switch>
  );
}

SessionsRouter.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string,
  }).isRequired,
};
