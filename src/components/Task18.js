import React, { Component } from 'react';

export default class Task18 extends Component {
  state = { name: 'Иван', age: 25, show: false };

  toggleUser = () => {
    const { show } = this.state;
    this.setState({ show: !show });
  };

  render() {
    const { name, age, show } = this.state;
    const message = show ? (
      <p>
        имя: {name}, возраст: {age}
      </p>
    ) : null;

    return (
      <div>
        {message}
        <button onClick={this.toggleUser}>{show ? 'hide' : 'show'}</button>
      </div>
    );
  }
}
