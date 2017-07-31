import React from 'react';
import {
  Route,
  Switch,
  Redirect,
} from 'react-router';
import {
  TransitionGroup,
  CSSTransition
} from 'react-transition-group';
import VotoNavWrapper from './containers/VotoNavWrapper';
import SessionListPage from './containers/SessionListPage';

import './styles/RootStyles.css';
import LoginPage from './containers/LoginPage';

const Fade = (props) => (
  <CSSTransition
    {...props}
    classNames="fade"
    timeout={450}
    mountOnEnter={true}
    unmountOnExit={true}
  />
);

const Blank = props => {
  return (
    <div>
      <span>Blank</span>
    </div>
  );
}

class Root extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      navShowing: true,
    }
  }

  componentDidMount() {
    this._handleResize();
    window.addEventListener('resize', this._handleResize.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._handleResize.bind(this));
  }

  _handleResize() {
    this.setState({
      navShowing: (window.innerWidth >= 750),
    })
  }

  render() {
    const { props } = this;

    return (
      <VotoNavWrapper drawSideNav={this.state.navShowing}>
        <Route exact path="/" render={() => {

          if (props.user) {
            return (
              <Redirect to="/dashboard"/>
            );
          } else {
            return (
              <Redirect to="/login"/>
            );
          }
        }}/>
        <TransitionGroup>
          <Fade key={props.location.pathname}>
            <section
              style={{
                position: 'fixed',
                top: '4rem',
                bottom: 0,
                width: (this.state.navShowing ? 'calc(100% - 256px'
                                              : '100%'),
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Switch location={props.location}>
                <Route exact path="/login" component={LoginPage}/>
                <Route exact path="/sessions" component={SessionListPage}/>
                <Route component={Blank}/>
              </Switch>
            </section>
          </Fade>
        </TransitionGroup>
      </VotoNavWrapper>
    );
  }
};

export default Root;
