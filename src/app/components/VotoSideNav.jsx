import React from 'react';
import PropTypes from 'prop-types';
import {
  connect,
} from 'react-redux';
import {
  push,
} from 'react-router-redux';
import {
  withRouter,
} from 'react-router';
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

function VotoSideNav(props) {
  return (
    <div className="side-nav-container">
      <SideNav
        highlightColor="#fff"
        highlightBgColor="#31383e"
        defaultSelected={props.location.pathname.substring(1)}
        onItemSelection={i =>
          props.navigateTo(`/${i}`)
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
  );
}

const mapDispatchToProps = dispatch => ({
  navigateTo: (route) => {
    dispatch(push(route));
  },
});

VotoSideNav.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
  navigateTo: PropTypes.func.isRequired,
};

export default withRouter(connect(null, mapDispatchToProps)(VotoSideNav));
