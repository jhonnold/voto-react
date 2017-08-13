/* eslint-disable */
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";
import { persistStore } from "redux-persist";
import { Route } from "react-router";
import createMuiTheme from "material-ui/styles/theme";
import { MuiThemeProvider } from "material-ui/styles";
import { history, store } from "./app/redux";
import Root from "./app/Root";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";

const theme = createMuiTheme();

class App extends React.Component {
  constructor() {
    super();
    this.state = { rehydrated: false };
  }

  componentWillMount() {
    persistStore(store, {}, () => {
      this.setState({ rehydrated: true });
    });
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Provider store={store}>
          {this.state.rehydrated
            ? <ConnectedRouter history={history}>
                <Route path="/" component={Root} />
              </ConnectedRouter>
            : <div />}
        </Provider>
      </MuiThemeProvider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
