import React, { Component } from 'react';

export default class Task16 extends Component {
  state = { show: false, name: 'Иван' };

  render() {
    const { show, name } = this.state;
    return (
      <div>
        {show ? 'Hello' : 'Goodbuy'}, {name}!
      </div>
    );
  }
}
