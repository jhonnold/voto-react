import React from 'react';
import {
  connect
} from 'react-redux';
import {
  Grid
} from 'material-ui';
import './styles/LoginPageStyles.css';

class LoginPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
  }

  render() {
    return (
      <Grid container gutter={0}>
        <Grid item xs={12}>
          <span>test</span>
        </Grid>
      </Grid>
    );
  }
}

const mapDispatchToProps = dispatch => (
  {
    dispatch
  }
);

export default connect(null, mapDispatchToProps)(LoginPage);
