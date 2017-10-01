import ReactDOM from 'react-dom';
import init from './App';

async function launch() {
  const App = await init();
  ReactDOM.render(App, document.getElementById('root'));
}

launch();
