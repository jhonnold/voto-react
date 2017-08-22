import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import { Drawer, Divider } from "material-ui";
import { ListItem, ListItemIcon, ListItemText } from "material-ui/List";
import {
  Home as HomeIcon,
  DataUsage,
  Folder as FolderIcon,
  FolderOpen as FolderOpenIcon,
  FolderSpecial,
} from "material-ui-icons";

function VotoNavDrawer(props) {
  const navigate = (i) => {
    props.navigateTo(i);
  };

  const loggedOutItems = (
    <div>
      <ListItem>
        <ListItemText primary="Please Login" />
      </ListItem>
      <Divider />
    </div>
  );

  const listItems = (
    <div>
      <ListItem button onClick={() => navigate("/dashboard")}>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
      <Divider />
      <ListItem button onClick={() => navigate("/sessions")}>
        <ListItemIcon>
          <FolderIcon />
        </ListItemIcon>
        <ListItemText primary="Sessions" />
      </ListItem>
      <Divider />
      <ListItem button onClick={() => navigate("/fave_sessions")}>
        <ListItemIcon>
          <FolderSpecial />
        </ListItemIcon>
        <ListItemText primary="Favorite Sessions" />
      </ListItem>
      <Divider />
      <ListItem button onClick={() => navigate("/prev_sessions")}>
        <ListItemIcon>
          <FolderOpenIcon />
        </ListItemIcon>
        <ListItemText primary="Previous Sessions" />
      </ListItem>
      <Divider />
      <ListItem button onClick={() => navigate("/data")}>
        <ListItemIcon>
          <DataUsage />
        </ListItemIcon>
        <ListItemText primary="Data" />
      </ListItem>
      <Divider />
    </div>
  );

  return (
    <div>
      <Drawer anchor="left" {...props}>
        {props.loggedIn ? listItems : loggedOutItems}
      </Drawer>
    </div>
  );
}

const mapStateToProps = ({ user }) => ({
  user,
});

const mapDispatchToProps = dispatch => ({
  navigateTo: (route) => {
    dispatch(push(route));
  },
});

VotoNavDrawer.defaultProps = {
  loggedIn: false,
};

VotoNavDrawer.propTypes = {
  navigateTo: PropTypes.func.isRequired,
  loggedIn: PropTypes.bool,
};

export default connect(mapStateToProps, mapDispatchToProps)(VotoNavDrawer);
