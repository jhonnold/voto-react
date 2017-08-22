import React from "react";
import PropTypes from "prop-types";
import { AppBar, Toolbar, IconButton, Button } from "material-ui";
import { Menu as MenuIcon } from "material-ui-icons";
import VotoNavDrawer from "./VotoNavDrawer";

import "./styles/VotoNavBarStyles.css";

export default class VotoNavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };

    this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
    this.handleDrawerClose = this.handleDrawerClose.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleDrawerOpen() {
    this.setState({
      open: true,
    });
  }

  handleDrawerClose() {
    this.setState({
      open: false,
    });
  }

  handleLogout() {
    this.props.logout();
  }

  render() {
    const { drawNavHeader, loggedIn } = this.props;

    return (
      <div className="nav-bar-container">
        <AppBar position="static" className="nav-bar-app">
          <Toolbar className="no-padding" style={{ height: "4rem" }}>
            {drawNavHeader &&
              <div className="nav-bar-side-nav-header">
                <span className="nav-bar-side-nav-header-text">voto</span>
              </div>}
            {!drawNavHeader &&
              <IconButton onClick={this.handleDrawerOpen}>
                <MenuIcon />
              </IconButton>}
            <div style={{ flex: 1 }} />
            {!loggedIn
              ? <Button color="contrast">Login</Button>
              : <Button color="contrast" onClick={this.handleLogout}>
                Logout
              </Button>}
          </Toolbar>
        </AppBar>
        <VotoNavDrawer
          open={this.state.open}
          onRequestClose={this.handleDrawerClose}
          onClick={this.handleDrawerClose}
          loggedIn={loggedIn}
        />
      </div>
    );
  }
}

VotoNavBar.defaultProps = {
  loggedIn: false,
};

VotoNavBar.propTypes = {
  drawNavHeader: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
  loggedIn: PropTypes.bool,
};
