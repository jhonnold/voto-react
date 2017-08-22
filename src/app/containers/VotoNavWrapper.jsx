import React from "react";
import PropTypes from "prop-types";
import VotoNavBar from "../components/VotoNavBar";
import VotoSideNav from "../components/VotoSideNav";

import "./styles/VotoNavWrapperStyles.css";

export default function VotoNavWrapper(props) {
  const { drawSideNav } = props;

  return (
    <div className="nav-wrapper">
      <VotoNavBar
        drawNavHeader={drawSideNav}
        logout={props.logout}
        loggedIn={props.loggedIn}
      />
      <div className="nav-bottom-wrapper">
        {drawSideNav && <VotoSideNav loggedIn={props.loggedIn} />}
        <div className="app-wrapper">
          {props.children}
        </div>
      </div>
    </div>
  );
}

VotoNavWrapper.defaultProps = {
  children: null,
  loggedIn: false,
};

VotoNavWrapper.propTypes = {
  drawSideNav: PropTypes.bool.isRequired,
  children: PropTypes.node,
  loggedIn: PropTypes.bool,
  logout: PropTypes.func.isRequired,
};
