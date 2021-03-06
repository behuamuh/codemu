import React, { Component } from 'react';

export default class Task70 extends Component {
  state = {
    users: [
      { name: 'Коля', surname: 'Иванов', age: 30 },
      { name: 'Вася', surname: 'Петров', age: 40 },
      { name: 'Петя', surname: 'Сидоров', age: 50 },
    ],
  };

  showMessage = number => () => {
    alert(number);
  };

  render() {
    const { users } = this.state;
    const list = users.map((user, index) => {
      return (
        <User key={index} user={user} handleClick={this.showMessage(index)} />
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
