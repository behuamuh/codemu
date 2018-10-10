import React, { Component } from 'react';

export default class Task48 extends Component {
  state = { options: [], input: '' };

  handleChange = event => {
    this.setState({ input: event.target.value });
  };

  handleSubmit = () => {
    const { options, input } = this.state;
    this.setState({
      options: [...options, input],
      input: '',
    });
  };

  render() {
    const { options, input } = this.state;
    const list = options.map((option, index) => {
      return <option key={index}>{option}</option>;
    });
    return (
      <div>
        <input type="text" value={input} onChange={this.handleChange} />
        <button onClick={this.handleSubmit}>Add option</button>
        <select>{list}</select>
      </div>
    );
  }
}
