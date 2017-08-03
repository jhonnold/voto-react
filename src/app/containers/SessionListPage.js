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

  _handleNewSessionClicked = () => {
    this.setState({
      modalOpen: true,
    })
    //this.props.goToNewSession();
  }

  render() {
    const { modalOpen } = this.state;
    const { sessions } = this.props;

    let blur = modalOpen ? {filter: 'blur(3px)'} : null;

    return (
      <div className="session-list-container">
        {modalOpen && <NewSessionModal />}
        <Grid container gutter={8} style={blur}>
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
