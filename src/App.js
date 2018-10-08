import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import { Task1 } from './components/Task1';
import { Task2 } from './components/Task2';
import { Task3 } from './components/Task3';
import { Task4 } from './components/Task4';
import { Task5 } from './components/Task5';
import { Task6 } from './components/Task6';
import { Task7 } from './components/Task7';
import { Task8 } from './components/Task8';
import { Task9 } from './components/Task9';
import { Task10 } from './components/Task10';
import Task11 from './components/Task11';

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
          <Route path="/task5" component={Task5} />
          <Route path="/task6" component={Task6} />
          <Route path="/task7" component={Task7} />
          <Route path="/task8" component={Task8} />
          <Route path="/task9" component={Task9} />
          <Route path="/task10" component={Task10} />
          <Route path="/task11" component={Task11} />
        </Switch>
      </div>
    );
  }
}

export default App;
