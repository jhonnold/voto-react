import React from 'react';
import { Typography } from 'material-ui';
import { withTheme } from 'material-ui/styles';
import styled from 'styled-components';

import LoginForm from '../../components/login-form';

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

const Login = ({ theme }) => (
  <Wrapper>
    <Content theme={theme}>
      <Header theme={theme}>
        <Typography color="accent" type="display3" align="center" id="header">
          VOTO
        </Typography>
      </Header>
      <LoginForm theme={theme} />
    </Content>
  </Wrapper>
);

export default withTheme()(Login);
