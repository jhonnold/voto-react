import React from "react";
import { connect } from "react-redux";
import { activeSessions } from "../redux/actions/sessionsActions";

class StudentLandingPage extends React.Component {

  componentDidMount() {
    this.props.getActiveSessions();
  }

  render() {
    return <div>I am the StudentLandingPage</div>;
  }
}

const mapStateToProps = ({ sessions }) => ({
  sessions,
});

const mapDispatchToProps = dispatch => ({
  getActiveSessions: () => dispatch(activeSessions()),
});

export default connect(mapStateToProps, mapDispatchToProps)(StudentLandingPage);
