import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import { loginUser } from "../redux/actions/userActions";
import LoginForm from "../components/LoginForm";
import "./styles/LoginPageStyles.css";

function LoginPage(props) {
  const { goToSignUp, goToForgotPassword, onLogin } = props;

  const handleSubmit = (values) => {
    onLogin(values.userName, values.password);
  };

  return (
    <div className="login-page-wrapper">
      <LoginForm
        onSubmit={handleSubmit}
        goToSignUp={goToSignUp}
        goToForgotPassword={goToForgotPassword}
      />
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  goToSignUp: () => dispatch(push("/signup")),
  goToForgotPassword: () => dispatch(push("/forgot_password")),
  onLogin: (username, password) => {
    dispatch(loginUser(username, password));
  },
});

LoginPage.propTypes = {
  goToSignUp: PropTypes.func.isRequired,
  goToForgotPassword: PropTypes.func.isRequired,
  onLogin: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(LoginPage);
