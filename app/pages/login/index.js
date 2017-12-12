import React from 'react';
import { Button } from 'material-ui';
import { withTheme } from 'material-ui/styles';

const Login = () => (
  <Button raised color="accent">Login</Button>
);

export default withTheme()(Login);
