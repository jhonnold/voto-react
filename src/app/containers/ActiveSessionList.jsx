import React from "react";
import { connect } from "react-redux";
import { Grid } from "material-ui";
import { activeSessions } from "../redux/actions/sessionsActions";
import ActiveSessionCard from "../components/ActiveSessionCard";

import "./styles/ActiveSessionListStyles.scss";

class ActiveSessionList extends React.Component {
  componentDidMount() {
    this.props.getActiveSessions();
  }

  render() {
    const { sessions } = this.props;

    return (
      <div className="active-session-list-container">
        <Grid>
          {sessions.map(session =>
            <ActiveSessionCard key={session.sessionId} data={session} />,
          )}
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = ({ sessions }) => ({
  sessions,
});

const mapDispatchToProps = dispatch => ({
  getActiveSessions: () => dispatch(activeSessions()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ActiveSessionList);
