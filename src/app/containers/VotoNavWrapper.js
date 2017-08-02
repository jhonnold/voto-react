import React from 'react';
import VotoNavBar from '../components/VotoNavBar';
import VotoSideNav from '../components/VotoSideNav';

import './styles/VotoNavWrapperStyles.css';


export default class VotoNavWrapper extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      drawSideNav: this.props.drawSideNav,
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      ...nextProps
    })
  }

  render() {
    const { drawSideNav } = this.state;

    return (
      <div className="nav-wrapper">
        <VotoNavBar drawNavHeader={drawSideNav} />
        <div className="nav-bottom-wrapper">
          {drawSideNav &&
            <VotoSideNav />
          }
          <div className="app-wrapper">
            {
              this.props.children
            }
          </div>
        </div>
      </div>
    );
  }
}
