import React, { Component } from 'react';

export default class Task35 extends Component {
  state = {
    hrefs: [
      { href: '1.html', text: 'ссылка 1' },
      { href: '2.html', text: 'ссылка 2' },
      { href: '3.html', text: 'ссылка 3' },
    ],
    href: '',
    text: '',
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = () => {
    const { hrefs, href, text } = this.state;
    this.setState({
      hrefs: [...hrefs, { href, text }],
      href: '',
      text: '',
    });
  };

  render() {
    const { hrefs, href, text } = this.state;
    const list = hrefs.map(item => {
      return (
        <li key={item.text}>
          <a href={item.href}>{item.text}</a>
        </li>
      );
    });
    return (
      <div>
        <ul>{list}</ul>
        <input
          type="text"
          name="href"
          value={href}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="text"
          value={text}
          onChange={this.handleChange}
        />
        <button onClick={this.handleSubmit}>Add</button>
      </div>
    );
  }
}
