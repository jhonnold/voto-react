import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import Voto from './App';

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
