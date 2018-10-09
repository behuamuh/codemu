import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import { routes } from './routes';

class App extends Component {
  render() {
    const list = routes.map((item, index) => {
      return <Route path={item.path} component={item.component} />;
    });
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Switch>{list}</Switch>
      </div>
    );
  }
}

export default App;
