import React from 'react';
import {
  connect
} from 'react-redux';
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
        <Button fab className="session-list-fab">
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

export default connect(mapStateToProps)(SessionListPage);
