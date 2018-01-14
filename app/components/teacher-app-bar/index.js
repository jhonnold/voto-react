import React from 'react';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import ToolBar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import { withTheme } from 'material-ui/styles';
import styled from 'styled-components';

import { toggleDrawer, logout } from '../../redux/actions';

const GradientBar = styled(AppBar)`
  background: linear-gradient(
    to left,
    ${props => props.theme.palette.primary[500]},
    ${props => props.theme.palette.primary[700]}
  );
`;

const MenuButton = styled(IconButton)`
  margin-left: -12px;
  margin-right: 20px;
`;

const TeacherBar = ({ theme, toggle, ...props }) => (
  <GradientBar position="static" theme={theme}>
    <ToolBar>
      <MenuButton color="contrast" onClick={toggle}>
        <MenuIcon />
      </MenuButton>
      <Typography type="title" color="inherit" style={{ flex: 1 }}>
        Voto
      </Typography>
      <Button color="contrast" onClick={props.logout}>Logout</Button>
    </ToolBar>
  </GradientBar>
);

const mapDispatchToProps = dispatch => ({
  toggle: () => dispatch(toggleDrawer()),
  logout: () => dispatch(logout()),
});

export default connect(null, mapDispatchToProps)(withTheme()(TeacherBar));
