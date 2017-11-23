import React from 'react';
import { connect } from 'react-redux';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { Button } from 'material-ui';
import { blue, lightBlue } from 'material-ui/colors';

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: lightBlue,
  },
});

const App = ({ login }) => {
  return (
    <MuiThemeProvider theme={theme}>
      <Button raised color="accent" onClick={() => login()}>Hi</Button>
    </MuiThemeProvider>
  );
};

const mapDispatchToProps = dispatch => ({
  login: () => dispatch({ type: 'LOGIN_REQUESTED', payload: { userName: 'teacher', password: 'password' } }),
});

export default connect(null, mapDispatchToProps)(App);
