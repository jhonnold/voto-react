import React from 'react';
import {
  connect
} from 'react-redux';
import {
  push
} from 'react-router-redux';
import {
  Grid,
  Button,
} from 'material-ui';
import {
  Add as AddIcon,
} from 'material-ui-icons';
import SessionCard from '../components/SessionCard';

import './styles/SessionListPageStyles.css';

class SessionListPage extends React.Component {
  _handleNewSessionClicked = () => {
    this.props.goToNewSession();
  }

  render() {
    const { sessions } = this.props;

    return (
      <div className="session-list-container">
        <Grid container gutter={8}>
          {sessions.map((l, i) => (
            <SessionCard
              key={i}
              data={l}
            />
          ))}
        </Grid>
        <Button
          fab
          className="session-list-fab"
          onClick={this._handleNewSessionClicked}
        >
          <AddIcon />
        </Button>
      </div>
    );
  }
}

const mapStateToProps = ({ sessions }) => (
  {
    sessions,
  }
);

const mapDispatchToProps = dispatch => (
  {
    goToNewSession: () => {
      dispatch(push(`/sessions/new`))
    }
  }
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SessionListPage);
