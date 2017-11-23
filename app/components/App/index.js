import React from 'react';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { Button } from 'material-ui';
import { blue, lightBlue } from 'material-ui/colors';
// import styled from 'styled-components';

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: lightBlue,
  },
});

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <Button raised color="accent">Hi</Button>
    </MuiThemeProvider>
  );
};

export default App;
