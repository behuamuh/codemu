import React, { Component } from 'react';

export default class Task71 extends Component {
  state = {
    users: [
      { name: 'Коля', surname: 'Иванов', age: 30 },
      { name: 'Вася', surname: 'Петров', age: 40 },
      { name: 'Петя', surname: 'Сидоров', age: 50 },
    ],
  };

  deleteUser = index => () => {
    const { users } = this.state;
    this.setState({
      users: [...users.slice(0, index), ...users.slice(index + 1)],
    });
  };

  render() {
    const { users } = this.state;
    const list = users.map((user, index) => {
      return (
        <User
          key={user.name}
          user={user}
          handleClick={this.deleteUser(index)}
        />
      );
    });
    return (
      <table>
        <thead>
          <tr>
            <td>name</td>
            <td>surname</td>
            <td>age</td>
          </tr>
        </thead>
        <tbody>{list}</tbody>
      </table>
    );
  }
}

class User extends Component {
  render() {
    const { name, surname, age } = this.props.user;
    const { handleClick } = this.props;
    return (
      <tr>
        <td>{name}</td>
        <td>{surname}</td>
        <td>{age}</td>
        <td>
          <a onClick={handleClick}>Click</a>
        </td>
      </tr>
    );
  }
}
