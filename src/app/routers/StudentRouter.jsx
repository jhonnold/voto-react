import React from "react";
import PropTypes from "prop-types";
import { Route, Switch, Redirect } from "react-router";
import ActiveSessionList from "../containers/ActiveSessionList";
import ActiveSession from "../containers/ActiveSession";

export default function StudentRouter(props) {
  return (
    <Switch>
      <Route
        exact
        path={`${props.match.path}/sessions`}
        component={ActiveSessionList}
      />
      <Route
        exact
        path={`${props.match.path}/sessions/:sessionId`}
        component={ActiveSession}
      />
      <Route render={() => <Redirect to={`${props.match.path}/sessions`} />} />
    </Switch>
  );
}

StudentRouter.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string,
  }).isRequired,
};
