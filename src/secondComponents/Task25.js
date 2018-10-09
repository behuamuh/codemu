import React, { Component } from 'react';

export default class Task25 extends Component {
  state = { users: ['Коля', 'Вася', 'Петя', 'Иван', 'Дима'] };

  getUsers() {
    const list = this.state.users.map((user, index) => {
      return (
        <li key={index}>
          {user}
          <button onClick={this.deleteUser(index)}>Delete</button>
        </li>
      );
    });
    return list;
  }

  deleteUser = index => () => {
    const users = this.state.users;
    this.setState({
      users: [...users.slice(0, index), ...users.slice(index + 1)],
    });
  };

  render() {
    return <ul>{this.getUsers()}</ul>;
  }
}
