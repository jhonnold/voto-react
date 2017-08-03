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
  signupUser
} from '../redux/actions/userActions';
import './styles/SignupPageStyles.css';

class SignupPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      userName: '',
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
      <div className="signup-page-wrapper">
        <form
          className="signup-page-container"
          onSubmit={(e) => {
            e.preventDefault();
            this.props.onSignup(this.state)
          }}
        >
          <span className="signup-page-form-header">
            Voto
          </span>
          <input
            type="text"
            className="signup-page-login-input"
            placeholder="First"
            onChange={(event) =>
              this._handleInputChange('firstName', event.target.value)
            }
          />
          <input
            type="text"
            className="signup-page-login-input"
            placeholder="Last"
            onChange={(event) =>
              this._handleInputChange('lastName', event.target.value)
            }
          />
          <input
            type="text"
            className="signup-page-login-input"
            placeholder="Username"
            onChange={(event) =>
              this._handleInputChange('userName', event.target.value)
            }
          />
          <input
            type="password"
            className="signup-page-login-input"
            placeholder="Password"
            onChange={(event) =>
              this._handleInputChange('password', event.target.value)
            }
          />
          <input
            type="submit"
            style={{ display: 'none' }}
          />
          <div className="signup-page-buttons-wrapper">
            <Button
              raised
              className="signup-page-button"
              onClick={() => this.props.onSignup(
                this.state,
              )}
            >
              Sign Up
            </Button>
          </div>
          <span
            className="signup-page-client-text"
            onClick={this.props.goToLogin}
          >
            Already a user?
          </span>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => (
  {
    goToLogin: () => dispatch(push(`/login`)),
    onSignup: (params) => {
      dispatch(signupUser(params));
    }
  }
);

export default connect(null, mapDispatchToProps)(SignupPage);
