import React from "react";
import PropTypes from "prop-types";
import { Field, reduxForm } from "redux-form";
import { Button } from "material-ui";

import "./styles/SignupPageStyles.css";

function SignupForm(props) {
  const { handleSubmit, goToLogin, selectedType } = props;

  return (
    <form className="signup-page-container" onSubmit={handleSubmit}>
      <span className="signup-page-form-header">Voto</span>
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
        type="email"
        className="signup-page-login-input"
        placeholder="Email"
        component="input"
        name="email"
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
      <div className="signup-radio-container">
        <label
          htmlFor="teacher-radio"
          className={`signup-page-label ${selectedType === "T" && "selected"}`}
        >
          <Field
            id="teacher-radio"
            type="radio"
            value="T"
            component="input"
            name="type"
            style={{ display: "none" }}
          />
          Teacher
        </label>
        <label
          htmlFor="student-radio"
          className={`signup-page-label ${selectedType === "S" && "selected"}`}
        >
          <Field
            id="student-radio"
            type="radio"
            value="S"
            component="input"
            name="type"
            style={{ display: "none" }}
          />
          Student
        </label>
      </div>
      <input type="submit" style={{ display: "none" }} />
      <div className="signup-page-buttons-wrapper">
        <Button raised className="signup-page-button" type="submit">
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
  form: "signupForm",
})(SignupForm);
