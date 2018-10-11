import React, { Component } from 'react';

export default class Task52 extends Component {
  state = {
    users: [
      { name: 'Коля', surname: 'Иванов', salary: 300, checked: true },
      { name: 'Вася', surname: 'Петров', salary: 400, checked: true },
      { name: 'Петя', surname: 'Сидоров', salary: 500, checked: true },
    ],
  };

  handleChange = index => () => {
    const { users } = this.state;
    users[index].checked = !users[index].checked;
    this.setState({ users: users });
  };

  render() {
    const { users } = this.state;
    let summ = 0;
    const list = users.map((user, index) => {
      if (user.checked) {
        summ += user.salary;
      }
      return (
        <User
          key={index}
          name={user.name}
          surname={user.surname}
          salary={user.salary}
          checked={user.checked}
          handleChange={this.handleChange(index)}
        />
      );
    });
    return (
      <div>
        <table>{list}</table>
        <p>{summ}</p>
      </div>
    );
  }
}

class User extends Component {
  render() {
    const { name, surname, salary, checked, handleChange } = this.props;
    return (
      <tr>
        <td>{name}</td>
        <td>{surname}</td>
        <td>{salary}</td>
        <td>
          <input type="checkbox" checked={checked} onChange={handleChange} />
        </td>
      </tr>
    );
  }
}
