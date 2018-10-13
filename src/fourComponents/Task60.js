import React, { Component } from 'react';

export default class Task60 extends Component {
  state = {
    value: 'eng',
    eng: [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ],
    rus: [
      'понедельник',
      'вторник',
      'среда',
      'четверг',
      'пятница',
      'суббота',
      'воскресенье',
    ],
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    const { rus, eng, value } = this.state;
    const days = value === 'eng' ? eng : rus;
    const list = days.map((day, index) => {
      return <option key={index}>{day}</option>;
    });

    return (
      <div>
        <select value={value} onChange={this.handleChange}>
          <option value="eng">English</option>
          <option value="rus">Russian</option>
        </select>
        <select>{list}</select>
      </div>
    );
  }
}
