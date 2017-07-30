import React from 'react';
import {
  connect
} from 'react-redux';
import {
  push
} from 'react-router-redux';
import SideNav, {
  Nav,
  NavIcon,
  NavText,
} from 'react-sidenav';
import {
  Home as HomeIcon,
  DataUsage,
  Folder as FolderIcon,
  FolderOpen as FolderOpenIcon,
  FolderSpecial,
} from 'material-ui-icons';

import './styles/VotoSideNavStyles.css';

const VotoSideNav = (props) => {
  return (
    <div className="side-nav-container">
      <SideNav
        highlightColor="#fff"
        highlightBgColor="#31383e"
        defaultSelected={props.path.substring(1)}
        onItemSelection={(i, p) =>
          props.dispatch(push(`/${i}`))
        }
      >
        <Nav id="dashboard">
          <NavIcon><HomeIcon /></NavIcon>
          <NavText>Dashboard</NavText>
        </Nav>
        <Nav id="sessions">
          <NavIcon><FolderIcon /></NavIcon>
          <NavText>Sessions</NavText>
        </Nav>
        <Nav id="sessions/favorite">
          <NavIcon><FolderSpecial /></NavIcon>
          <NavText>Favorite Sessions</NavText>
        </Nav>
        <Nav id="prev_sessions">
          <NavIcon><FolderOpenIcon /></NavIcon>
          <NavText>Past Sessions</NavText>
        </Nav>
        <Nav id="data">
          <NavIcon><DataUsage /></NavIcon>
          <NavText>Data</NavText>
        </Nav>
      </SideNav>
    </div>
  )
};

const mapStateToProps = state => {
  return {
    path: state.location.pathname,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(VotoSideNav);