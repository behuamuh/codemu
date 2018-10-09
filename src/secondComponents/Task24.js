import React, { Component } from 'react';

export default class Task24 extends Component {
  state = { users: ['Коля', 'Вася', 'Петя', 'Иван', 'Дима'] };

  getUsers() {
    const list = this.state.users.map(user => {
      return <li key={user}>{user}</li>;
    });

    return list;
  }

  deleteUser = () => {
    this.setState({ users: this.state.users.slice(0, -1) });
  };

  render() {
    return (
      <div>
        <ul>{this.getUsers()}</ul>
        <button onClick={this.deleteUser}>Delete</button>
      </div>
    );
  }
}
