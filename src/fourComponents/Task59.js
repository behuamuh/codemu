import React, { Component } from 'react';

export default class Task59 extends Component {
  state = {
    users: [
      { name: 'Коля', surname: 'Иванов', salary: 300 },
      { name: 'Вася', surname: 'Петров', salary: 400 },
      { name: 'Петя', surname: 'Сидоров', salary: 200 },
    ],
  };

  clickSort = event => {
    const field = event.target.dataset.name;
    const { users } = this.state;
    this.setState({
      users: [...users].sort((a, b) => (a[field] < b[field] ? -1 : 1)),
    });
  };

  render() {
    const { users } = this.state;
    const table = users.map((user, index) => {
      const { name, surname, salary } = user;
      return <User key={index} name={name} surname={surname} salary={salary} />;
    });
    return (
      <table>
        <tr>
          <td data-name="name" onClick={this.clickSort}>
            Имя
          </td>
          <td data-name="surname" onClick={this.clickSort}>
            Фамилия
          </td>
          <td data-name="salary" onClick={this.clickSort}>
            Зарплата
          </td>
        </tr>
        {table}
      </table>
    );
  }
}

class User extends Component {
  render() {
    const { name, surname, salary } = this.props;
    return (
      <tr>
        <td>{name}</td>
        <td>{surname}</td>
        <td>{salary}</td>
      </tr>
    );
  }
}
