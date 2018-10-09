import React, { Component } from 'react';

export default class Task37 extends Component {
  state = {
    users: [
      { name: 'Коля', age: 30 },
      { name: 'Вася', age: 40 },
      { name: 'Петя', age: 50 },
    ],
    name: '',
    age: '',
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = () => {
    const { users, name, age } = this.state;
    this.setState({
      users: [...users, { name, age }],
      name: '',
      age: '',
    });
  };

  render() {
    const { users, name, age } = this.state;
    const list = users.map(user => {
      return (
        <tr key={user.name}>
          <td>{user.name}</td>
          <td>{user.age}</td>
        </tr>
      );
    });
    return (
      <div>
        <table>{list}</table>
        <input
          type="text"
          name="name"
          value={name}
          onChange={this.handleChange}
        />
        <input
          type="number"
          name="age"
          value={age}
          min={0}
          onChange={this.handleChange}
        />
        <button onClick={this.handleSubmit}>Add user</button>
      </div>
    );
  }
}
