import React, { Component } from 'react';

export default class Task21 extends Component {
  state = {
    hrefs: [
      { href: '1.html', text: 'ссылка 1' },
      { href: '2.html', text: 'ссылка 2' },
      { href: '3.html', text: 'ссылка 3' },
    ],
  };
  render() {
    const list = this.state.hrefs.map(item => {
      return (
        <li key={item.href}>
          <a href={item.href}>{item.text}</a>
        </li>
      );
    });
    return <ul>{list}</ul>;
  }
}
