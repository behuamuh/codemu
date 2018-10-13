import React, { Component } from 'react';

const initialState = [
  { name: 'Коля', surname: 'Иванов', salary: 300 },
  { name: 'Вася', surname: 'Петров', salary: 400 },
  { name: 'Петя', surname: 'Сидоров', salary: 200 },
  { name: 'Коля', surname: 'Иванов', salary: 300 },
  { name: 'Вася', surname: 'Петров', salary: 400 },
  { name: 'Петя', surname: 'Сидоров', salary: 200 },
  { name: 'Коля', surname: 'Иванов', salary: 300 },
  { name: 'Вася', surname: 'Петров', salary: 400 },
  { name: 'Петя', surname: 'Сидоров', salary: 200 },
  { name: 'Коля', surname: 'Иванов', salary: 300 },
  { name: 'Вася', surname: 'Петров', salary: 400 },
  { name: 'Петя', surname: 'Сидоров', salary: 200 },
  { name: 'Коля', surname: 'Иванов', salary: 300 },
  { name: 'Вася', surname: 'Петров', salary: 400 },
  { name: 'Петя', surname: 'Сидоров', salary: 200 },
  { name: 'Коля', surname: 'Иванов', salary: 300 },
  { name: 'Вася', surname: 'Петров', salary: 400 },
  { name: 'Петя', surname: 'Сидоров', salary: 200 },
  { name: 'Коля', surname: 'Иванов', salary: 300 },
  { name: 'Вася', surname: 'Петров', salary: 400 },
  { name: 'Петя', surname: 'Сидоров', salary: 200 },
  { name: 'Коля', surname: 'Иванов', salary: 300 },
  { name: 'Вася', surname: 'Петров', salary: 400 },
  { name: 'Петя', surname: 'Сидоров', salary: 200 },
  { name: 'Коля', surname: 'Иванов', salary: 300 },
  { name: 'Вася', surname: 'Петров', salary: 400 },
  { name: 'Петя', surname: 'Сидоров', salary: 200 },
  { name: 'Коля', surname: 'Иванов', salary: 300 },
  { name: 'Вася', surname: 'Петров', salary: 400 },
  { name: 'Петя', surname: 'Сидоров', salary: 200 },
  { name: 'Коля', surname: 'Иванов', salary: 300 },
  { name: 'Вася', surname: 'Петров', salary: 400 },
  { name: 'Петя', surname: 'Сидоров', salary: 200 },
];

export default class Task63 extends Component {
  state = { users: initialState, activePage: 1 };

  setPage = index => () => {
    this.setState({ activePage: index });
  };

  getLinkList = () => {
    const length = this.state.users.length;
    const linksLength = Math.ceil(length / 10);
    return new Array(linksLength).fill(0).map((item, index) => {
      return index + 1 === this.state.activePage ? (
        ` Page ${index + 1} `
      ) : (
        <button onClick={this.setPage(index + 1)}>{index + 1} </button>
      );
    });
  };

  render() {
    const { users, activePage } = this.state;
    const userList = users
      .filter(
        (user, index) =>
          index + 1 > (activePage - 1) * 10 && index < activePage * 10
      )
      .map(user => {
        console.log(user);
        return <User user={user} />;
      });
    return (
      <div>
        {this.getLinkList()}
        <br />
        <table>
          <tr>
            <td>name</td>
            <td>surname</td>
            <td>salary</td>
          </tr>
          {userList}
        </table>
      </div>
    );
  }
}

class User extends Component {
  render() {
    const { name, surname, salary } = this.props.user;
    return (
      <tr>
        <td>{name}</td>
        <td>{surname}</td>
        <td>{salary}</td>
      </tr>
    );
  }
}
