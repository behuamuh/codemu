import React, { Component } from 'react';

export default class Task54 extends Component {
  state = {
    users: [
      { name: 'Коля', surname: 'Иванов', age: 30 },
      { name: 'Вася', surname: 'Петров', age: 40 },
      { name: 'Петя', surname: 'Сидоров', age: 50 },
    ],
  };

  render() {
    const { users } = this.state;
    const list = users.map((user, index) => {
      const { name, surname, age } = user;
      return <User key={index} name={name} surname={surname} age={age} />;
    });
    return <ul>{list}</ul>;
  }
}

class User extends Component {
  state = { isOpen: true };

  toggleOpen = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    const { name, surname, age } = this.props;
    const { isOpen } = this.state;
    return (
      <li>
        <input type="checkbox" checked={isOpen} onChange={this.toggleOpen} />
        {name}
        {isOpen ? ` ${surname} ${age} лет.` : null}
      </li>
    );
  }
}
