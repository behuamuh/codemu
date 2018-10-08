import React from 'react';

export class Task10 extends React.Component {
  getText() {
    return <p>text</p>;
  }

  render() {
    return <div>{this.getText()}</div>;
  }
}
