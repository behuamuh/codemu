import React, { Component } from 'react';

export default class Task44 extends Component {
  state = { texts: [], value: '' };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = () => {
    const { texts, value } = this.state;
    this.setState({
      texts: [...texts, value],
      value: '',
    });
  };

  render() {
    const { texts, value } = this.state;
    const posts = texts.map((post, index) => {
      return <p key={index}>{post}</p>;
    });
    return (
      <div>
        <textarea value={value} onChange={this.handleChange} />
        <button onClick={this.handleSubmit}>Add</button>
        {posts}
      </div>
    );
  }
}
