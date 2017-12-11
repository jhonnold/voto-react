import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import Voto from './App';

import './global.css';
// Make sure we import the semantic styles
import '../semantic/dist/semantic.min.css';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root'),
  );
};

render(Voto);

if (module.hot) {
  module.hot.accept('./App', () => {
    const newApp = require('./App').default;
    render(newApp);
  });
}
