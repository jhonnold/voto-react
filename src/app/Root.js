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

const Root = props => {

  return (
    <VotoNavWrapper>
      <Route exact path="/" render={() => (
        <Redirect to="/dashboard" />
      )} />
      <TransitionGroup>
        <Fade key={props.location.pathname}>
          <section style={{position: 'fixed'}}>
            <Switch location={props.location}>
              <Route exact path="/sessions" component={SessionListPage} />
              <Route path="/" component={Blank} />
            </Switch>
          </section>
        </Fade>
      </TransitionGroup>
    </VotoNavWrapper>
  );
};

export default Root;
