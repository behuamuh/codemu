import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import { Task1 } from './components/Task1';
import { Task2 } from './components/Task2';
import { Task3 } from './components/Task3';
import { Task4 } from './components/Task4';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Switch>
          <Route path="/task1" component={Task1} />
          <Route path="/task2" component={Task2} />
          <Route path="/task3" component={Task3} />
          <Route path="/task4" component={Task4} />
        </Switch>
      </div>
    );
  }
}

export default App;
