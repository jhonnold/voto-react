import React from 'react';
import {
  connect
} from 'react-redux';
import {
  Button
} from 'material-ui'
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
        <form className="login-page-container">
          <span className="login-page-form-header">
            Voto
          </span>
          <input
            type="text"
            className="login-page-login-input"
            placeholder="Email"
          />
          <input
            type="password"
            className="login-page-login-input"
            placeholder="Password"
          />
          <Button
            raised
            className="login-page-submit-button"
          >
            Test
          </Button>
        </form>
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
