import React from 'react';
import { connect } from 'react-redux';
// import { Route } from 'react-router-dom';
import { withStyles, createMuiTheme, MuiThemeProvider } from 'material-ui/styles';
import { darkBlue, blue } from 'material-ui/colors';
import {
  Drawer,
  AppBar,
  Toolbar,
  List,
  Typography,
  IconButton,
  Hidden,
  Divider,
} from 'material-ui';
import MenuIcon from 'material-ui-icons/Menu';
import AccountCircle from 'material-ui-icons/AccountCircle';

const drawerWidth = 240;

const globalTheme = createMuiTheme({
  palette: {
    primary: darkBlue,
    secondary: blue,
  },
});

const styles = theme => ({
  flex: {
    flex: 1,
  },
  appWrapper: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100vh',
  },
  appBar: {
    position: 'absolute',
    marginLeft: drawerWidth,
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  navIconHide: {
    marginLeft: -12,
    marginRight: 20,
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  drawerHeader: theme.mixins.toolbar,
  drawerPaper: {
    width: 250,
    [theme.breakpoints.up('md')]: {
      width: drawerWidth,
      position: 'relative',
      height: '100vh',
    },
  },
  content: {
    backgroundColor: theme.palette.background.default,
    width: '100%',
    height: 'calc(100% - 56px)',
    marginTop: 56,
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100% - 64px)',
      marginTop: 64,
    },
  },
});

class App extends React.Component {
  state = {
    drawerOpen: false,
  };

  handleDrawerToggle = () => {
    this.setState({ drawerOpen: !this.state.drawerOpen });
  };

  render() {
    const { classes, loggedIn } = this.props;

    // TODO Export to its own file
    const drawer = (
      <div>
        <div className={classes.drawerHeader} />
        <Divider />
        <List>Hi</List>
        <Divider />
        <List>Other Hi</List>
      </div>
    );

    return (
      <MuiThemeProvider theme={globalTheme}>
        <div className={classes.appWrapper}>
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton
                color="contrast"
                aria-label="open drawer"
                onClick={this.handleDrawerToggle}
                className={classes.navIconHide}
              >
                <MenuIcon />
              </IconButton>
              <Typography type="title" color="inherit" noWrap className={classes.flex}>
                Voto
              </Typography>
              {loggedIn && (
                <IconButton color="contrast" aria-label="user-profile">
                  <AccountCircle />
                </IconButton>
              )}
            </Toolbar>
          </AppBar>
          <Hidden mdUp>
            <Drawer
              type="temporary"
              anchor="left"
              open={this.state.drawerOpen}
              classes={{
                paper: classes.drawerPaper,
              }}
              onRequestClose={this.handleDrawerToggle}
              ModalProps={{
                keepMounted: true,
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden mdDown implementation="css">
            <Drawer
              type="permanent"
              open
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <main className={classes.content}>
            <Typography type="body1" noWrap>
              {'You think water moves fast? You should see ice.'}
            </Typography>
          </main>
        </div>
      </MuiThemeProvider>
    );
  }
}

const connectedApp = connect()(App);
export default withStyles(styles, { withTheme: true })(connectedApp);
