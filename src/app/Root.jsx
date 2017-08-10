import React from 'react';
import PropTypes from 'prop-types';
import {
  Route,
  Switch,
  Redirect,
} from 'react-router';
import {
  TransitionGroup,
  CSSTransition,
} from 'react-transition-group';
import {
  connect,
} from 'react-redux';
import resize from './redux/actions/containerActions';
import VotoNavWrapper from './containers/VotoNavWrapper';
import SessionsRouter from './routers/SessionsRouter';
import LoginPage from './containers/LoginPage';
import SignupPage from './containers/SignupPage';

import './styles/RootStyles.css';


const Fade = props => (
  <CSSTransition
    {...props}
    classNames="fade"
    timeout={450}
    mountOnEnter
    unmountOnExit
  />
);

const Blank = () => (
  <div>
    <span>Blank</span>
  </div>
);

class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navShowing: true,
    };

    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize() {
    this.props.handleResize(window.innerWidth);
  }

  render() {
    const { props } = this;

    return (
      <VotoNavWrapper drawSideNav={this.props.containerWidth > 750}>
        <Route
          exact
          path="/"
          render={() => {
            if (props.user) {
              return (
                <Redirect to="/dashboard" />
              );
            }
            return (
              <Redirect to="/login" />
            );
          }}
        />
        <TransitionGroup>
          <Fade key={props.location.pathname}>
            <section
              style={{
                position: 'fixed',
                top: '4rem',
                bottom: 0,
                width: (this.props.containerWidth > 750 ? 'calc(100% - 256px)'
                  : '100%'),
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Route
                exact
                path="/"
                render={() => (
                  <Redirect to="/login" />
                )}
              />
              <Switch location={props.location}>
                <Route exact path="/login" component={LoginPage} />
                <Route exact path="/signup" component={SignupPage} />
                <Route path="/sessions" component={SessionsRouter} />
                <Route component={Blank} />
              </Switch>
            </section>
          </Fade>
        </TransitionGroup>
      </VotoNavWrapper>
    );
  }
}

const mapStateToProps = ({ container }) => (
  {
    containerWidth: container.width,
  }
);

const mapDispatchToProps = dispatch => (
  {
    handleResize: (width) => {
      dispatch(resize(width));
    },
  }
);

Root.propTypes = {
  containerWidth: PropTypes.number,
  handleResize: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Root);
