import React from 'react';
import {
  Grid,
} from 'material-ui';
import SessionCard from '../components/SessionCard';

import './styles/SessionListPageStyles.css';

export default class SessionListPage extends React.Component {

  render() {
    return (
      <div className="session-list-container">
        <Grid container gutter={8}>
          <SessionCard />
          <SessionCard />
          <SessionCard />
          <SessionCard />
          <SessionCard />
          <SessionCard />
          <SessionCard />
          <SessionCard />
          <SessionCard />
          <SessionCard />
          <SessionCard />
          <SessionCard />
          <SessionCard />
          <SessionCard />
          <SessionCard />
          <SessionCard />
          <SessionCard />
          <SessionCard />
          <SessionCard />
          <SessionCard />
          <SessionCard />
          <SessionCard />
          <SessionCard />
          <SessionCard />

        </Grid>
      </div>
    );
  }

}
