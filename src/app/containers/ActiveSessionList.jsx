import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import { Grid } from "material-ui";
import {
  activeSessions,
  setSelectedSession,
} from "../redux/actions/sessionsActions";
import { socket } from "../shared/socket";
import ActiveSessionCard from "../components/ActiveSessionCard";

import "./styles/ActiveSessionListStyles.scss";

class ActiveSessionList extends React.Component {
  constructor(props) {
    super(props);

    this.handleJoin = this.handleJoin.bind(this);
  }

  componentDidMount() {
    socket.connect("/socket.io").then(() =>
      socket.subscribeToActiveSessionFeed(),
    );
    this.props.getActiveSessions();
  }

  /* eslint-disable*/
  handleJoin(session) {
    // TODO Handle join here
    //console.log(`Attempting to join session ${sessionId}`);
    this.props.joinSession(session);
  }
  /* eslint-enable */
  render() {
    const { sessions } = this.props;

    return (
      <div className="active-session-list-container">
        <Grid>
          {sessions.map(session =>
            (<ActiveSessionCard
              key={session.sessionId}
              data={session}
              handleJoin={() => this.handleJoin(session)}
            />),
          )}
        </Grid>
      </div>
    );
  }
}

ActiveSessionList.propTypes = {
  getActiveSessions: PropTypes.func.isRequired,
  sessions: PropTypes.arrayOf(PropTypes.object).isRequired,
  joinSession: PropTypes.func.isRequired,
};

const mapStateToProps = ({ sessions }) => ({
  sessions,
});

const mapDispatchToProps = dispatch => ({
  getActiveSessions: () => dispatch(activeSessions()),
  joinSession: (session) => {
    dispatch(setSelectedSession(session));
    dispatch(push(`/student/sessions/${session.sessionId}`));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ActiveSessionList);
