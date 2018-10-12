import React, { Component } from 'react';

export default class Task56 extends Component {
  state = {
    users: [
      { name: 'Коля', age: 30 },
      { name: 'Вася', age: 40 },
      { name: 'Петя', age: 50 },
    ],
  };

  render() {
    const { users } = this.state;
    const table = users.map((user, index) => {
      return (
        <tr key={index}>
          <Ceil text={user.name} />
          <Ceil text={user.age} />
        </tr>
      );
    });
    return <table>{table}</table>;
  }
}

class Ceil extends Component {
  state = { isOpen: false, input: '', text: '' };

  componentDidMount() {
    this.setState({ text: this.props.text });
  }

  handleChange = event => {
    this.setState({
      input: event.target.value,
    });
  };

  toggleOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  handleSubmit = () => {
    this.setState({
      text: this.state.input,
    });
    this.toggleOpen();
  };

  render() {
    const { isOpen, input, text } = this.state;

    const content = isOpen ? (
      <td>
        <input type="text" value={input} onChange={this.handleChange} />
        <button onClick={this.handleSubmit}>Send</button>
      </td>
    ) : (
      <td>
        {text}
        <button onClick={this.toggleOpen}>Change</button>
      </td>
    );
    return content;
  }
}
