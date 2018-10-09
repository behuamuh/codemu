import React, { Component } from 'react';

export default class Task34 extends Component {
  state = { users: ['Коля', 'Вася', 'Петя', 'Иван', 'Дима'], input: '' };

  handleChange = event => {
    this.setState({ input: event.target.value });
  };

  handleSubmit = () => {
    this.setState({
      users: [...this.state.users, this.state.input],
      input: '',
    });
  };

  handleDelete = index => () => {
    const { users } = this.state;
    this.setState({
      users: [...users.slice(0, index), ...users.slice(index + 1)],
    });
  };

  render() {
    const { users, input } = this.state;
    const list = users.map((user, index) => {
      return (
        <li key={index}>
          {user}
          <button onClick={this.handleDelete(index)}>Delete</button>
        </li>
      );
    });
    return (
      <div>
        <ul>{list}</ul>
        <input type="text" value={input} onChange={this.handleChange} />
        <button onClick={this.handleSubmit}>Add</button>
      </div>
    );
  }
}
