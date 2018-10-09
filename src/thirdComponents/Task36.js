import React, { Component } from 'react';

export default class Task36 extends Component {
  state = { users: ['Коля', 'Вася', 'Петя', 'Иван', 'Дима'], input: 0 };

  handleChange = event => {
    this.setState({ input: +event.target.value });
  };

  handleSubmit = () => {
    const { users, input } = this.state;
    this.setState({
      users: [...users.slice(0, input - 1), ...users.slice(input)],
      input: '',
    });
  };

  render() {
    const { users, input } = this.state;
    const list = users.map(user => {
      return <li key={user}>{user}</li>;
    });
    return (
      <div>
        <ol>{list}</ol>
        <input type="number" value={input} onChange={this.handleChange} />
        <button onClick={this.handleSubmit}>Delete</button>
      </div>
    );
  }
}
