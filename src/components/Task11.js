import React, { Component } from 'react';

export default class Task11 extends Component {
  getNum1() {
    return 1;
  }

  getNum2() {
    return 2;
  }

  render() {
    return <div>{`text ${this.getNum1() + this.getNum2()}`}</div>;
  }
}
