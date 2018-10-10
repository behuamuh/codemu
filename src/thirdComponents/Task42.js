import React, { Component } from 'react';

export default class Task42 extends Component {
  state = {
    cities: ['Moscow', 'Kiev', 'Piter', 'Oslo', 'Prage', 'Tashkent'],
    value: 0,
  };

  handleChange = event => {
    this.setState({ value: +event.target.value });
  };

  render() {
    const { cities, value } = this.state;
    const options = cities.map((city, index) => {
      return <option value={index}>{city}</option>;
    });
    return (
      <div>
        <select onChange={this.handleChange} value={this.state.value}>
          {options}
        </select>
        <p>{cities[value]}</p>
      </div>
    );
  }
}
