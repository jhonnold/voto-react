import React from 'react';
import PropTypes from 'prop-types';
import {
  connect,
} from 'react-redux';
import {
  push,
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
  newSession, setSelectedSession,
} from '../redux/actions/sessionsActions';
import NewSessionModal from '../components/NewSessionModal';
import SessionCard from '../components/SessionCard';

import './styles/SessionListPageStyles.css';

class SessionListPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
    };

    this.handleEditClick = this.handleEditClick.bind(this);
    this.handleNewSessionCanceled = this.handleNewSessionCanceled.bind(this);
    this.handleNewSessionClicked = this.handleNewSessionClicked.bind(this);
    this.handleNewSessionSubmitted = this.handleNewSessionSubmitted.bind(this);
  }

  componentWillMount() {
    if (this.props.sessions.length === 0) {
      this.props.requestSessions();
    }
  }

  handleNewSessionClicked() {
    this.setState({
      modalOpen: true,
    });
  }

  handleNewSessionSubmitted({ className, title, description }) {
    this.props.createSession(className, title, description);
  }

  handleNewSessionCanceled() {
    this.setState({
      modalOpen: false,
    });
  }

  handleEditClick(session) {
    this.props.goToEdit(session);
  }

  render() {
    const { modalOpen } = this.state;
    const { sessions } = this.props;

    const blur = modalOpen ? { filter: 'blur(3px)' } : null;

    return (
      <div className="session-list-container">
        {modalOpen &&
          <NewSessionModal
            onCancel={this.handleNewSessionCanceled}
            onSubmit={this.handleNewSessionSubmitted}
          />
        }
        <Grid container gutter={8} style={blur}>
          {sessions.map(l => (
            <SessionCard
              key={l.sessionId}
              data={l}
              onEditClick={this.handleEditClick}
            />
          ))}
        </Grid>
        <Button
          fab
          className="session-list-fab"
          onClick={this.handleNewSessionClicked}
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
      dispatch(getSessions());
    },
    createSession: (className, title, description) => {
      dispatch(newSession(className, title, description));
    },
    goToEdit: (session) => {
      dispatch(setSelectedSession(session));
      dispatch(push(`/sessions/${session.sessionId}/edit`));
    },
  }
);

SessionListPage.propTypes = {
  sessions: PropTypes.arrayOf(PropTypes.object).isRequired,
  requestSessions: PropTypes.func.isRequired,
  createSession: PropTypes.func.isRequired,
  goToEdit: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SessionListPage);
