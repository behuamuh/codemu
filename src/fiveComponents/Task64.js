import React, { Component } from 'react';

export default class Task64 extends Component {
  state = { input: '', cities: [], city: '' };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = () => {
    const { input, cities } = this.state;
    this.setState({
      cities: [...cities, input],
      input: '',
    });
  };

  render() {
    const { input, cities, city } = this.state;
    const options = cities.map((option, index) => {
      return <option key={index}>{option}</option>;
    });
    return (
      <div>
        <input
          type="text"
          name="input"
          value={input}
          onChange={this.handleChange}
        />
        <button onClick={this.handleSubmit}>Add city</button>
        <select name="city" value={city} onChange={this.handleChange}>
          {options}
        </select>
        <p>{city}</p>
      </div>
    );
  }
}
