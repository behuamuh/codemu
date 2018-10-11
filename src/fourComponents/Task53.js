import React, { Component } from 'react';

export default class Task53 extends Component {
  state = {
    posts: ['lorem', 'ipsum', 'dolor', 'sit', 'atmet'],
  };

  render() {
    const { posts } = this.state;
    const list = posts.map((post, index) => {
      return <Post key={index} text={post} />;
    });
    return <div>{list}</div>;
  }
}

class Post extends Component {
  state = { checked: true };

  handleChange = event => {
    this.setState({ checked: !this.state.checked });
  };

  render() {
    const { text } = this.props;
    const { checked } = this.state;
    return (
      <div>
        <input type="checkbox" checked={checked} onChange={this.handleChange} />
        {checked ? <p>{text}</p> : null}
      </div>
    );
  }
}
