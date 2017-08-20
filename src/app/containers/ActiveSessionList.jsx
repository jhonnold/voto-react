import React from "react";
import { connect } from "react-redux";
import { Grid } from "material-ui";
import { activeSessions } from "../redux/actions/sessionsActions";

class ActiveSessionList extends React.Component {
  componentDidMount() {
    this.props.getActiveSessions();
  }

  render() {
    const { sessions } = this.props;

    return (
      <div>
        <Grid>
            {/* TODO design active session card for students */}
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
