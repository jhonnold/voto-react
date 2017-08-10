import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { signupUser } from '../redux/actions/userActions';
import SignupForm from '../components/SignupForm';
import './styles/SignupPageStyles.css';

function SignupPage(props) {
  const { onSignup, goToLogin } = props;

  const handleSubmit = (values) => {
    onSignup({
      firstName: values.first,
      lastName: values.last,
      userName: values.userName,
      password: values.password,
    });
  };

  return (
    <div className="signup-page-wrapper">
      <SignupForm onSubmit={handleSubmit} goToLogin={goToLogin} />
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  goToLogin: () => dispatch(push('/login')),
  onSignup: params => dispatch(signupUser(params)),
});

SignupPage.propTypes = {
  onSignup: PropTypes.func.isRequired,
  goToLogin: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(SignupPage);
