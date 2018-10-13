import React, { Component } from 'react';

export default class Task62 extends Component {
  state = { users: [] };

  addUser = (name, surname, salary, sex) => {
    const { users } = this.state;
    this.setState({
      users: [
        ...users,
        {
          name,
          surname,
          salary,
          sex,
        },
      ],
    });
  };

  render() {
    const { users } = this.state;
    const list = users.map((user, index) => {
      return <User key={index} user={user} />;
    });
    return (
      <div>
        <table>
          <tr>
            <td>name</td>
            <td>surname</td>
            <td>salary</td>
            <td>sex</td>
          </tr>
          {list}
        </table>
        <h3>Add user</h3>
        <Form handleSubmit={this.addUser} />
      </div>
    );
  }
}
class User extends Component {
  render() {
    const { name, surname, salary, sex } = this.props.user;
    return (
      <tr>
        <td>{name}</td>
        <td>{surname}</td>
        <td>{salary}</td>
        <td>{sex}</td>
      </tr>
    );
  }
}

class Form extends Component {
  state = { name: '', surname: '', salary: '', sex: 'Man' };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = () => {
    const { name, surname, salary, sex } = this.state;
    this.props.handleSubmit(name, surname, salary, sex);
    alert('User added');
    this.setState({
      name: '',
      surname: '',
      salary: '',
      sex: 'Man',
    });
  };

  render() {
    const { name, surname, salary, sex } = this.state;
    return (
      <div>
        <input
          type="text"
          name="name"
          value={name}
          onChange={this.handleChange}
        />
        <br />
        <input
          type="text"
          name="surname"
          value={surname}
          onChange={this.handleChange}
        />
        <br />
        <input
          type="text"
          name="salary"
          value={salary}
          onChange={this.handleChange}
        />
        <br />
        <select name="sex" value={sex} onChange={this.handleChange}>
          <option>Man</option>
          <option>Woman</option>
        </select>
        <br />
        <button onClick={this.handleSubmit}>Add user</button>
      </div>
    );
  }
}
