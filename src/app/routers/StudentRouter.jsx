import React from "react";
import PropTypes from "prop-types";
import { Route, Switch, Redirect } from "react-router";
import StudentLandingPage from "../containers/StudentLandingPage";

export default function StudentRouter(props) {
  return (
    <Switch>
      <Route exact path={props.match.path} component={StudentLandingPage} />
      <Route render={() => <Redirect to={props.match.path} />} />
    </Switch>
  );
}

StudentRouter.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string,
  }).isRequired,
};
