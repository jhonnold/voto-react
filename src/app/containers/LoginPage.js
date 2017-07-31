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
      <div className="login-page-wrapper">
        <div className="login-page-container">
          
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => (
  {
    dispatch
  }
);

export default connect(null, mapDispatchToProps)(LoginPage);
