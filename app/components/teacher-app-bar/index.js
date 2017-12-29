import React from 'react';
import AppBar from 'material-ui/AppBar';
import ToolBar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import { withTheme } from 'material-ui/styles';
import styled from 'styled-components';

const GradientBar = styled(AppBar)`
  background: linear-gradient(
    to right,
    ${props => props.theme.palette.primary[500]},
    ${props => props.theme.palette.primary[700]}
  );
`;

const MenuButton = styled(IconButton)`
  margin-left: -12px;
  margin-right: 20px;
`;

const TeacherBar = ({ theme }) => (
  <GradientBar position="static" theme={theme}>
    <ToolBar>
      <MenuButton color="contrast">
        <MenuIcon />
      </MenuButton>
      <Typography type="title" color="inherit" style={{ flex: 1 }}>
        Voto
      </Typography>
      <Button color="contrast">Logout</Button>
    </ToolBar>
  </GradientBar>
);

export default withTheme()(TeacherBar);
