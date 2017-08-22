import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Grid } from "material-ui";
import { activeSessions } from "../redux/actions/sessionsActions";
import ActiveSessionCard from "../components/ActiveSessionCard";

import "./styles/ActiveSessionListStyles.scss";

class ActiveSessionList extends React.Component {
  constructor(props) {
    super(props);

    this.handleJoin = this.handleJoin.bind(this);
  }

  componentDidMount() {
    this.props.getActiveSessions();
  }

  /* eslint-disable*/
  handleJoin(sessionId) {
    // TODO Handle join here
    console.log(`Attempting to join session ${sessionId}`);
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
              handleJoin={() => this.handleJoin(session.sessionId)}
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
};

const mapStateToProps = ({ sessions }) => ({
  sessions,
});

const mapDispatchToProps = dispatch => ({
  getActiveSessions: () => dispatch(activeSessions()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ActiveSessionList);
