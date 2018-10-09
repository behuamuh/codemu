import React, { Component } from 'react';

export default class Task33 extends Component {
  state = { users: ['Коля', 'Вася', 'Петя', 'Иван', 'Дима'], input: '' };

  handleChange = event => {
    this.setState({ input: event.target.value });
  };

  handleSubmit = () => {
    this.setState({
      users: [...this.state.users, this.state.input],
      input: '',
    });
  };

  render() {
    const { users, input } = this.state;
    const list = users.map(user => {
      return <li key={user}>{user}</li>;
    });
    return (
      <div>
        <ul>{list}</ul>
        <input type="text" value={input} onChange={this.handleChange} />
        <button onClick={this.handleSubmit}>Add</button>
      </div>
    );
  }
}
