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
    if (props.loggedIn) {
      props.navigateTo(i);
    }
  };

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
        {listItems}
      </Drawer>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  navigateTo: (route) => {
    dispatch(push(route));
  },
});

VotoNavDrawer.propTypes = {
  navigateTo: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(VotoNavDrawer);
