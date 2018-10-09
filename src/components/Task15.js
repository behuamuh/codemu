import React, { Component } from 'react';

export default class Task15 extends Component {
  state = { name: 'Иван', age: 25 };

  changeUser = () => {
    this.setState({
      name: 'Nicolas',
      age: 30,
    });
  };

  render() {
    const { name, age } = this.state;
    return (
      <div>
        <div>
          имя: {name}, возраст: {age}
        </div>
        <button onClick={this.changeUser}>Click me</button>
      </div>
    );
  }
}
