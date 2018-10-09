import React, { Component } from 'react';

export default class Task22 extends Component {
  state = { users: ['Коля', 'Вася', 'Петя', 'Иван', 'Дима'] };

  getUsers() {
    const list = this.state.users.map(user => {
      return <li key={user}>{user}</li>;
    });

    return list;
  }

  render() {
    return <ul>{this.getUsers()}</ul>;
  }
}
