import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Typography } from 'material-ui';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import { InputLabel, InputAdornment } from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';
import Visibility from 'material-ui-icons/Visibility';
import VisibilityOff from 'material-ui-icons/VisibilityOff';
import styled from 'styled-components';

import Input from '../redux-form-input';

const LoginForm = styled.form`
  margin: ${props => props.theme.spacing.unit * 2}px;
`;

const InputWrapper = styled(FormControl)`
  && {
    margin: ${props => props.theme.spacing.unit}px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: ${props => props.theme.spacing.unit}px;
`;

const StyledButton = styled(Button)`
  width: 50%;
  margin: ${props => props.theme.spacing.unit}px;
`;

class Login extends React.Component {
  state = {
    passwordVisible: false,
  };

  render() {
    const { theme, handleSubmit } = this.props;
    return (
      <LoginForm theme={theme} onSubmit={handleSubmit}>
        <InputWrapper fullWidth theme={theme}>
          <InputLabel htmlFor="email">Email</InputLabel>
          <Field name="email" type="text" component={Input} />
        </InputWrapper>
        <InputWrapper fullWidth theme={theme}>
          <InputLabel htmlFor="password">Password</InputLabel>
          <Field
            name="password"
            type={this.state.passwordVisible ? 'text' : 'password'}
            component={Input}
            muiProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() =>
                      this.setState({ passwordVisible: !this.state.passwordVisible })
                    }
                  >
                    {this.state.passwordVisible ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </InputWrapper>
        <ButtonContainer theme={theme}>
          <StyledButton raised color="accent" theme={theme} type="submit">
            Login
          </StyledButton>
          <Typography type="caption">
            Not Registered? <a href="/signup">Sign Up Here</a>
          </Typography>
        </ButtonContainer>
      </LoginForm>
    );
  }
}

export default reduxForm({ form: 'loginForm' })(Login);
