import React from "react";
import PropTypes from "prop-types";
import { Route, Switch, Redirect } from "react-router";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import { logoutUser } from "./redux/actions/userActions";
import resize from "./redux/actions/containerActions";
import ErrorComponent from "./components/ErrorComponent";
import VotoNavWrapper from "./containers/VotoNavWrapper";
import LoginPage from "./containers/LoginPage";
import SignupPage from "./containers/SignupPage";
import SessionsRouter from "./routers/SessionsRouter";
import StudentRouter from "./routers/StudentRouter";

import "./styles/RootStyles.css";

const Fade = props =>
  (<CSSTransition
    {...props}
    classNames="fade"
    timeout={450}
    mountOnEnter
    unmountOnExit
  />);

const Blank = () =>
  (<div>
    <span>Blank</span>
  </div>);

class Root extends React.Component {
  constructor(props) {
    super(props);

    this.handleResize = this.handleResize.bind(this);
    this.redirectIfNeeded = this.redirectIfNeeded.bind(this);
  }

  componentDidMount() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize() {
    this.props.handleResize(window.innerWidth);
  }

  redirectIfNeeded() {
    const { pathname } = this.props.location;

    if (!this.props.user.loggedIn) {
      if (pathname !== "/signup" && pathname !== "/login") {
        return <Route render={() => <Redirect to="/login" />} />;
      }
    }

    if (pathname === "/") {
      return <Route render={() => <Redirect to="/login" />} />;
    }

    return null;
  }

  render() {
    const { props } = this;

    return (
      <VotoNavWrapper
        drawSideNav={this.props.containerWidth > 750}
        loggedIn={props.user.loggedIn}
        logout={props.logout}
      >
        <ErrorComponent />
        <TransitionGroup>
          <Fade key={props.location.pathname}>
            <section
              style={{
                position: "fixed",
                top: "4rem",
                bottom: 0,
                width:
                  this.props.containerWidth > 750
                    ? "calc(100% - 256px)"
                    : "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {this.redirectIfNeeded()}
              <Switch location={props.location}>
                <Route exact path="/login" component={LoginPage} />
                <Route exact path="/signup" component={SignupPage} />
                <Route path="/sessions" component={SessionsRouter} />
                <Route path="/student" component={StudentRouter} />
                <Route component={Blank} />
              </Switch>
            </section>
          </Fade>
        </TransitionGroup>
      </VotoNavWrapper>
    );
  }
}

const mapStateToProps = ({ container, user }) => ({
  containerWidth: container.width,
  user,
});

const mapDispatchToProps = dispatch => ({
  handleResize: (width) => {
    dispatch(resize(width));
  },
  logout: () => dispatch(logoutUser()),
});

Root.propTypes = {
  containerWidth: PropTypes.number,
  handleResize: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Root);
