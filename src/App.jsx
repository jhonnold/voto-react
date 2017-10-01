import React from 'react';
import { Button, Link } from 'react-foundation';
import logo from './logo.svg';
import './App.scss';

export default () => (
  <div className="App">
    <Button>Save</Button>
    <Link>Test</Link>
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
    </header>
    <p className="App-intro">
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
  </div>
);
