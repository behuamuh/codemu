import React, { Component } from 'react';

export default class Task50 extends Component {
  state = { day: '', month: '', year: '' };

  componentDidMount() {
    const now = new Date();
    this.setState({
      day: now.getDate(),
      month: +now.getMonth() + 1 + '',
      year: now.getFullYear(),
    });
  }

  getOptions = size => {
    return new Array(size).fill(0).map((item, index) => {
      return <option key={index}>{1 + index}</option>;
    });
  };

  getDayFromSelect = () => {
    const { day, month, year } = this.state;
    const date = new Date(year, +month - 1, day).getDay();
    return date === 0 ? 7 : date;
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    const { day, month, year } = this.state;
    const listDay = this.getOptions(31);
    const listMont = this.getOptions(12);
    const listYear = this.getOptions(2018);
    return (
      <div>
        <select name="day" value={day} onChange={this.handleChange}>
          {listDay}
        </select>
        <select name="month" value={month} onChange={this.handleChange}>
          {listMont}
        </select>
        <select name="year" value={year} onChange={this.handleChange}>
          {listYear}
        </select>
        <p>{this.getDayFromSelect()}</p>
      </div>
    );
  }
}
