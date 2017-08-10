import React from 'react';
import {
  Drawer,
  // Button,
  // Divider,
} from 'material-ui';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import {
  Home as HomeIcon,
  // DataUsage,
  // Folder as FolderIcon,
  // FolderOpen as FolderOpenIcon,
  // FolderSpecial,
} from 'material-ui-icons';

export default function VotoNavDrawer(props) {
  const listItems = (
    <div>
      <ListItem button>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
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
