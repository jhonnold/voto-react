import React from "react";
import PropTypes from "prop-types";
import { Field, reduxForm } from "redux-form";
import { Button } from "material-ui";

function LoginForm(props) {
  const { handleSubmit, goToSignUp, goToForgotPassword } = props;

  return (
    <form className="login-page-container" onSubmit={handleSubmit}>
      <span className="login-page-form-header">Voto</span>
      <Field
        type="text"
        className="login-page-login-input"
        placeholder="Email"
        component="input"
        name="userName"
      />
      <Field
        type="password"
        className="login-page-login-input"
        placeholder="Password"
        component="input"
        name="password"
      />
      <input type="submit" style={{ display: "none" }} />
      <div className="login-page-buttons-wrapper">
        <Button raised className="login-page-button" type="submit">
          Login
        </Button>
        <Button raised className="login-page-button" onClick={goToSignUp}>
          Sign Up
        </Button>
      </div>
      <span
        role="button"
        tabIndex={0}
        className="login-page-forgot-text"
        onClick={goToForgotPassword}
      >
        Forgot your password?
      </span>
    </form>
  );
}

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  goToSignUp: PropTypes.func.isRequired,
  goToForgotPassword: PropTypes.func.isRequired,
};

export default reduxForm({
  form: "loginForm",
})(LoginForm);
