import React, { Component } from 'react';

export default class Task72 extends Component {
  state = { users: ['Коля', 'Вася', 'Петя', 'Иван', 'Дима'] };

  changeUser = index => message => {
    const { users } = this.state;
    this.setState({
      users: [...users.slice(0, index), message, ...users.slice(index + 1)],
    });
  };

  render() {
    const { users } = this.state;
    const list = users.map((user, index) => {
      return (
        <Punct key={index} text={user} handleSubmit={this.changeUser(index)} />
      );
    });

    return <ul>{list}</ul>;
  }
}

class Punct extends Component {
  state = {
    input: '',
    isOpen: false,
  };

  handleInput = event => {
    this.setState({ input: event.target.value });
  };

  toggleOpen = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  handleSubmit = () => {
    const { input } = this.state;
    this.props.handleSubmit(input);
    this.setState({ input: '' });
    this.toggleOpen();
  };

  render() {
    const { input, isOpen } = this.state;
    const { text } = this.props;
    const body = isOpen ? (
      <input
        type="text"
        autoFocus={true}
        value={input}
        onChange={this.handleInput}
        onBlur={this.handleSubmit}
      />
    ) : (
      <a onClick={this.toggleOpen}> Change </a>
    );
    return (
      <li>
        {text}
        {body}
      </li>
    );
  }
}
