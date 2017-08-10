import React from 'react';
import PropTypes from 'prop-types';
import {
  Field,
  reduxForm,
} from 'redux-form';
import {
  Button,
} from 'material-ui';

function SignupForm(props) {
  const { handleSubmit, goToLogin } = props;

  return (
    <form
      className="signup-page-container"
      onSubmit={handleSubmit}
    >
      <span className="signup-page-form-header">
        Voto
      </span>
      <Field
        type="text"
        className="signup-page-login-input"
        placeholder="First"
        component="input"
        name="first"
      />
      <Field
        type="text"
        className="signup-page-login-input"
        placeholder="Last"
        component="input"
        name="last"
      />
      <Field
        type="text"
        className="signup-page-login-input"
        placeholder="Username"
        component="input"
        name="userName"
      />
      <Field
        type="password"
        className="signup-page-login-input"
        placeholder="Password"
        component="input"
        name="password"
      />
      <input
        type="submit"
        style={{ display: 'none' }}
      />
      <div className="signup-page-buttons-wrapper">
        <Button
          raised
          className="signup-page-button"
          type="submit"
        >
          Sign Up
        </Button>
      </div>
      <span
        className="signup-page-client-text"
        role="button"
        tabIndex={0}
        onClick={goToLogin}
      >
        Already a user?
      </span>
    </form>
  );
}

SignupForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  goToLogin: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'signupForm',
})(SignupForm);
