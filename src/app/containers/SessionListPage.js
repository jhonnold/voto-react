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
import {
  getSessions,
  newSession, setSelectedSession
} from '../redux/actions/sessionsActions';
import NewSessionModal from '../components/NewSessionModal';
import SessionCard from '../components/SessionCard';

import './styles/SessionListPageStyles.css';

class SessionListPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
    }
  }

  componentWillMount() {
    if (this.props.sessions.length === 0) {
      this.props.requestSessions();
    }
  }

  _handleNewSessionClicked = () => {
    this.setState({
      modalOpen: true,
    })
  };

  _handleNewSessionSubmitted = (className, title, desc) => {
    this.props.createSession(className, title, desc);
  };

  _handleNewSessionCanceled = () => {
    this.setState({
      modalOpen: false,
    })
  };

  _handleEditClick = (session) => {
    this.props.goToEdit(session);
  };

  render() {
    const { modalOpen } = this.state;
    const { sessions } = this.props;

    let blur = modalOpen ? {filter: 'blur(3px)'} : null;

    return (
      <div className="session-list-container">
        {modalOpen &&
          <NewSessionModal
            onCancel={this._handleNewSessionCanceled}
            onSubmit={this._handleNewSessionSubmitted}
          />
        }
        <Grid container gutter={8} style={blur}>
          {sessions.map((l, i) => (
            <SessionCard
              key={i}
              data={l}
              onEditClick={this._handleEditClick}
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
    requestSessions: () => {
      dispatch(getSessions())
    },
    createSession: (className, title, description) => {
      dispatch(newSession(className, title, description))
    },
    goToEdit: (session) => {
      dispatch(setSelectedSession(session));
      dispatch(push(`/sessions/${session.sessionId}/edit`))
    },
  }
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SessionListPage);
