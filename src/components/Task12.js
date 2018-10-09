import React, { Component } from 'react';

export default class Task12 extends Component {
  state = {
    name: 'Иван',
    age: 25,
  };

  render() {
    const { name, age } = this.state;
    return (
      <div>
        Name: {name}, age: {age}
      </div>
    );
  }
}
