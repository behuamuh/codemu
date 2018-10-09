import React, { Component } from 'react';

export default class Task23 extends Component {
  state = { users: ['Коля', 'Вася', 'Петя', 'Иван', 'Дима'] };

  getUsers() {
    const list = this.state.users.map(user => {
      return <li key={user}>{user}</li>;
    });

    return list;
  }

  addUser = () => {
    this.setState({ users: [...this.state.users, 'punkt'] });
  };

  render() {
    return (
      <div>
        <ul>{this.getUsers()}</ul>
        <button onClick={this.addUser}>Add</button>
      </div>
    );
  }
}
