import React, { Component } from 'react';

export default class Task14 extends Component {
  state = { name: 'Иван', age: 25 };

  showMessage = () => {
    alert(this.state.name);
  };

  render() {
    return <button onClick={this.showMessage}>Click me</button>;
  }
}
