import React, { Component } from 'react';

export default class Task58 extends Component {
  state = { todos: [] };

  createTodo = text => {
    return {
      text,
      date: new Date().toDateString(),
    };
  };

  handleDelete = index => () => {
    const { todos } = this.state;
    this.setState({
      todos: [...todos.slice(0, index), ...todos.slice(index + 1)],
    });
  };

  handleChange = index => todo => {
    const { todos } = this.state;
    this.setState({
      todos: [
        ...todos.slice(0, index),
        this.createTodo(todo),
        ...todos.slice(index + 1),
      ],
    });
  };

  addTodo = todo => {
    const { todos } = this.state;
    this.setState({
      todos: [...todos, this.createTodo(todo)],
    });
  };

  render() {
    const { todos } = this.state;
    const list = todos.map((todo, index) => {
      return (
        <div>
          <Todo
            key={index}
            title={'TODO ' + (index + 1)}
            text={todo.text}
            date={todo.date}
            handleDelete={this.handleDelete(index)}
            handleChange={this.handleChange(index)}
          />
        </div>
      );
    });
    return (
      <div>
        <Form handleSubmit={this.addTodo} />
        {list}
      </div>
    );
  }
}

class Form extends Component {
  state = { input: '' };

  handleChange = event => {
    this.setState({
      input: event.target.value,
    });
  };

  handleSubmit = () => {
    this.props.handleSubmit(this.state.input);
    this.setState({ input: '' });
  };

  render() {
    const { input } = this.state;
    return (
      <div>
        <textarea value={input} onChange={this.handleChange} />
        <button onClick={this.handleSubmit}>Add</button>
      </div>
    );
  }
}

class Todo extends Component {
  state = { isChanged: false, input: '' };

  handleChange = () => {
    this.setState({ isChanged: !this.state.isChanged });
  };

  handleInput = event => {
    this.setState({ input: event.target.value });
  };

  handleSubmit = () => {
    this.props.handleChange(this.state.input);
    this.handleChange();
  };

  render() {
    const { title, date, text, handleDelete } = this.props;
    const { isChanged, input } = this.state;
    const change = isChanged ? (
      <div>
        <textarea value={input} onChange={this.handleInput} />
        <button onClick={this.handleSubmit}>Send</button>
      </div>
    ) : (
      <div>
        <button onClick={this.handleChange}>Change</button>
      </div>
    );
    return (
      <div>
        <h3>{title}</h3>
        <p>Added by {date}</p>
        <p>{text}</p>
        <button onClick={handleDelete}>Delete</button>
        {change}
      </div>
    );
  }
}
