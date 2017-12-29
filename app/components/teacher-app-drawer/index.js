import React from 'react';
import { connect } from 'react-redux';
import Drawer from 'material-ui/Drawer';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import BackArrowIcon from 'material-ui-icons/ArrowBack';
import HomeIcon from 'material-ui-icons/Home';
import FolderIcon from 'material-ui-icons/Folder';
import DataIcon from 'material-ui-icons/DataUsage';
import { toggleDrawer } from '../../redux/actions';

const TeacherDrawer = ({ drawerOpen, toggle }) => (
  <Drawer open={drawerOpen} onClose={toggle}>
    <ListItem button onClick={toggle}>
      <ListItemIcon>
        <BackArrowIcon />
      </ListItemIcon>
      <ListItemText primary="Close" />
    </ListItem>
    <Divider />
    <List>
      <ListItem button>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <FolderIcon />
        </ListItemIcon>
        <ListItemText primary="Presentations" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <DataIcon />
        </ListItemIcon>
        <ListItemText primary="Stats" />
      </ListItem>
    </List>
  </Drawer>
);

const mapStateToProps = ({ app }) => ({ ...app });

const mapDispatchToProps = dispatch => ({
  toggle: () => dispatch(toggleDrawer()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TeacherDrawer);
