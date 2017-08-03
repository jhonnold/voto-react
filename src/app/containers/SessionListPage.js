import React from 'react';
import {
  connect
} from 'react-redux';
import {
  Grid,
} from 'material-ui';
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
