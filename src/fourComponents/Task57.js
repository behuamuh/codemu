import React, { Component } from 'react';

export default class Task57 extends Component {
  state = { ways: ['Moscow', 'Prage', 'Tashkent', 'Piter'], active: 0 };

  handleChange = index => () => {
    this.setState({ active: index });
  };

  render() {
    const { ways, active } = this.state;
    const list = ways.map((way, index) => {
      return (
        <Way
          key={index}
          title={way}
          checked={index === active}
          handleChange={this.handleChange(index)}
        />
      );
    });

    return (
      <div>
        <ul>{list}</ul>
        <p>{ways[active]}</p>
      </div>
    );
  }
}

class Way extends Component {
  render() {
    const { checked, handleChange, title } = this.props;
    return (
      <li>
        <input type="radio" checked={checked} onChange={handleChange} />
        {title}
      </li>
    );
  }
}
