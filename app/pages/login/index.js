import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Typography } from 'material-ui';
import IconButton from 'material-ui/IconButton';
import Button from 'material-ui/Button';
import { InputLabel, InputAdornment } from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';
import Visibility from 'material-ui-icons/Visibility';
import VisibilityOff from 'material-ui-icons/VisibilityOff';
import { withTheme } from 'material-ui/styles';
import styled from 'styled-components';

import Input from '../../components/redux-form-input';

import background from '../../assets/images/banner-back-gray.jpg';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${background});
  background-position: center;
  background-size: cover;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  box-shadow: #555 0 0 8px 0;
  margin: ${props => props.theme.spacing.unit * 2}px;
  max-width: 400px;
`;

const Header = styled.div`
  background: linear-gradient(
    to right,
    ${props => props.theme.palette.primary[500]},
    ${props => props.theme.palette.primary[700]}
  );
  padding: ${props => props.theme.spacing.unit * 4}px;
  width: calc(100% - ${props => props.theme.spacing.unit * 8}px);
`;

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

const handleLogin = (event) => {
  event.preventDefault();
  console.log(event);
};

class Login extends React.Component {
  state = {
    passwordVisible: false,
  };

  render() {
    const { theme } = this.props;
    return (
      <Wrapper>
        <Content theme={theme}>
          <Header theme={theme}>
            <Typography color="accent" type="display3" align="center" id="header">
              VOTO
            </Typography>
          </Header>
          <LoginForm theme={theme} onSubmmit={handleLogin}>
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
        </Content>
      </Wrapper>
    );
  }
}

export default reduxForm({ form: 'loginForm' })(withTheme()(Login));
