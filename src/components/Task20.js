import React, { Component } from 'react';

export default class Task20 extends Component {
  state = { names: ['Коля', 'Вася', 'Петя'] };

  render() {
    const names = this.state.names.map((name, index) => {
      return (
        <li key={name}>
          {name} - {index + 1}
        </li>
      );
    });
    return <ul>{names}</ul>;
  }
}
