import React, { Component } from 'react';

export default class Task55 extends Component {
  state = { items: ['lorem', 'ipsum', 'dolor'] };

  render() {
    const { items } = this.state;
    const list = items.map((item, index) => {
      return <Punct key={index} text={item} />;
    });
    return <ul>{list}</ul>;
  }
}

class Punct extends Component {
  state = { isOpen: false, input: '', text: '' };

  componentDidMount() {
    this.setState({ text: this.props.text });
  }

  toggleOpen = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  handleChange = event => {
    this.setState({ input: event.target.value });
  };

  handleInput = () => {
    this.setState({
      text: this.state.input,
      input: '',
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    const { isOpen, input, text } = this.state;
    return (
      <li onClick={this.toggleOpen}>
        {text}
        {isOpen ? (
          <input
            autoFocus
            type="text"
            value={input}
            onChange={this.handleChange}
            onBlur={this.handleInput}
          />
        ) : null}
      </li>
    );
  }
}
