import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import { formValueSelector } from "redux-form";
import { signupUser } from "../redux/actions/userActions";
import SignupForm from "../components/SignupForm";
import "./styles/SignupPageStyles.css";

function SignupPage(props) {
  const { onSignup, goToLogin, type } = props;

  const handleSubmit = (values) => {
    onSignup({
      firstName: values.first,
      lastName: values.last,
      userName: values.userName,
      password: values.password,
      email: values.email,
      type: values.type,
    });
  };

  return (
    <div className="signup-page-wrapper">
      <SignupForm
        selectedType={type}
        onSubmit={handleSubmit}
        goToLogin={goToLogin}
      />
    </div>
  );
}

const selector = formValueSelector("signupForm");
const mapStateToProps = state => ({
  type: selector(state, "type"),
});

const mapDispatchToProps = dispatch => ({
  goToLogin: () => dispatch(push("/login")),
  onSignup: params => dispatch(signupUser(params)),
});

SignupPage.propTypes = {
  onSignup: PropTypes.func.isRequired,
  goToLogin: PropTypes.func.isRequired,
  type: PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupPage);
