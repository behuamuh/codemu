import React, { Component } from 'react';

export default class Task17 extends Component {
  state = { name: 'Иван', age: 25, show: false };

  showUser = () => {
    this.setState({ show: true });
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
        <button onClick={this.showUser}>Нажми на меня</button>
      </div>
    );
  }
}
