import React from 'react';
import PropTypes from 'prop-types';
import VotoNavBar from '../components/VotoNavBar';
import VotoSideNav from '../components/VotoSideNav';

import './styles/VotoNavWrapperStyles.css';


export default function VotoNavWrapper(props) {
  const { drawSideNav } = props;

  return (
    <div className="nav-wrapper">
      <VotoNavBar drawNavHeader={drawSideNav} />
      <div className="nav-bottom-wrapper">
        {drawSideNav &&
          <VotoSideNav />
        }
        <div className="app-wrapper">
          {
            props.children
          }
        </div>
      </div>
    </div>
  );
}

VotoNavWrapper.propTypes = {
  drawSideNav: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired,
};
