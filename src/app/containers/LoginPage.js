import React from 'react';
import {
  connect
} from 'react-redux';
import {
  push
} from 'react-router-redux';
import {
  Button
} from 'material-ui';
import {
  loginUser
} from '../redux/actions/userActions';
import './styles/LoginPageStyles.css';

class LoginPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
  }

  _handleInputChange = (field, value) => {
      this.setState({
        [field]: value,
      })
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
            onChange={(event) =>
              this._handleInputChange('username', event.target.value)
            }
          />
          <input
            type="password"
            className="login-page-login-input"
            placeholder="Password"
            onChange={(event) =>
              this._handleInputChange('password', event.target.value)
            }
          />
          <div className="login-page-buttons-wrapper">
            <Button
              raised
              className="login-page-button"
              onClick={() => this.props.onLogin(
                this.state.username, this.state.password,
              )}
            >
              Login
            </Button>
            <Button
              raised
              className="login-page-button"
              onClick={this.props.goToSignUp}
            >
              Sign Up
            </Button>
          </div>
          <span
            className="login-page-forgot-text"
            onClick={this.props.goToForgotPassword}
          >
            Forgot your password?
          </span>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => (
  {
    goToSignUp: () => dispatch(push(`/signup`)),
    goToForgotPassword: () => dispatch(push('/forgot_password')),
    onLogin: (username, password) => {
      dispatch(loginUser(username, password));
    }
  }
);

export default connect(null, mapDispatchToProps)(LoginPage);
