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
  const listItems = (
    <div>
      <ListItem button onClick={() => props.navigateTo("/dashboard")}>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
      <Divider />
      <ListItem button onClick={() => props.navigateTo("/sessions")}>
        <ListItemIcon>
          <FolderIcon />
        </ListItemIcon>
        <ListItemText primary="Sessions" />
      </ListItem>
      <Divider />
      <ListItem button onClick={() => props.navigateTo("/fave_sessions")}>
        <ListItemIcon>
          <FolderSpecial />
        </ListItemIcon>
        <ListItemText primary="Favorite Sessions" />
      </ListItem>
      <Divider />
      <ListItem button onClick={() => props.navigateTo("/prev_sessions")}>
        <ListItemIcon>
          <FolderOpenIcon />
        </ListItemIcon>
        <ListItemText primary="Previous Sessions" />
      </ListItem>
      <Divider />
      <ListItem button onClick={() => props.navigateTo("/data")}>
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
