import React, { Component } from 'react';

export default class Task19 extends Component {
  state = { names: ['Коля', 'Вася', 'Петя'] };

  render() {
    const names = this.state.names.map(name => {
      return <li key={name}>{name}</li>;
    });
    return <ul>{names}</ul>;
  }
}
