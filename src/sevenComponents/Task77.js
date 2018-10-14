import React, { Component } from 'react';

export default class Task77 extends Component {
  state = {
    users: [
      { name: 'Коля', surname: 'Иванов', price: 30, day: 7 },
      { name: 'Вася', surname: 'Петров', price: 20, day: 8 },
      { name: 'Петя', surname: 'Сидоров', price: 35, day: 6 },
    ],
  };

  handleChange = index => event => {
    const { users } = this.state;
    this.setState({
      users: [
        ...users.slice(0, index),
        { ...users[index], ...{ [event.target.name]: event.target.value } },
        ...users.slice(index + 1),
      ],
    });
  };

  render() {
    const { users } = this.state;
    let total = 0;
    const list = users.map((user, index) => {
      total += user.price * user.day;
      return (
        <User key={index} user={user} handleChange={this.handleChange(index)} />
      );
    });
    return (
      <table>
        <tr>
          <td>Name</td>
          <td>Surname</td>
          <td>Price</td>
          <td>Day</td>
          <td>Salary</td>
        </tr>
        {list}
        <tr>
          <td colSpan="5"> Total: {total}</td>
        </tr>
      </table>
    );
  }
}

class User extends Component {
  render() {
    const { name, surname, price, day } = this.props.user;
    const { handleChange } = this.props;
    const salary = price * day;
    return (
      <tr>
        <td>{name}</td>
        <td>{surname}</td>
        <td>
          <input
            type="number"
            value={price}
            onChange={handleChange}
            name="price"
          />
        </td>
        <td>
          <input type="number" value={day} onChange={handleChange} name="day" />
        </td>
        <td>{salary}</td>
      </tr>
    );
  }
}
