import React, { Component } from 'react';

export default class Task51 extends Component {
  state = { items: [1, 5, 6, 5, 7, 2, 6, 6] };

  render() {
    const { items } = this.state;
    const list = items.map((item, index) => {
      return <Punct key={index} text={item} />;
    });
    return <ul>{list}</ul>;
  }
}

class Punct extends Component {
  state = { active: true };

  handleChange = event => {
    this.setState({ active: !this.state.active });
  };

  render() {
    const { active } = this.state;
    const style = active ? 'none' : 'line-through';
    return (
      <li>
        <input type="checkbox" checked={!active} onChange={this.handleChange} />
        <span style={{ textDecoration: style }}>{this.props.text}</span>
      </li>
    );
  }
}
