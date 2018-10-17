import React, { Component } from 'react';

export default class Task78 extends Component {
  state = {
    test: [
      {
        question: 'Вопрос 1',
        answers: ['Ответ1', 'Ответ2', 'Ответ3', 'Ответ4', 'Ответ5'],
        right: 3, //номер правильного ответа
      },
      {
        question: 'Вопрос 2',
        answers: ['Ответ1', 'Ответ2', 'Ответ3', 'Ответ4', 'Ответ5'],
        right: 1, //номер правильного ответа
      },
      {
        question: 'Вопрос 3',
        answers: ['Ответ1', 'Ответ2', 'Ответ3', 'Ответ4', 'Ответ5'],
        right: 5, //номер правильного ответа
      },
      {
        question: 'Вопрос 4',
        answers: ['Ответ1', 'Ответ2', 'Ответ3', 'Ответ4', 'Ответ5'],
        right: 4, //номер правильного ответа
      },
    ],
  };

  render() {
    const { test } = this.state;
    const list = test.map((item, index) => {
      return <Question key={index} {...item} />;
    });

    return <div>{list}</div>;
  }
}
class Question extends Component {
  state = {
    input: '',
    userAnswer: '',
  };

  handleInput = event => {
    this.setState({ input: event.target.value });
  };

  handleCheck = () => {
    this.setState({
      userAnswer: this.state.input,
      input: '',
    });
  };

  render() {
    const { input, userAnswer } = this.state;
    const { question, answers, right } = this.props;

    let body = null;
    let style = null;

    if (userAnswer) {
      const valid = userAnswer === answers[right - 1];

      style = { color: valid ? 'green' : 'red' };
      body = (
        <div>
          Ваш ответ {userAnswer}, {valid ? 'правильно' : 'не правильно'}
        </div>
      );
    } else {
      body = (
        <div>
          <input type="text" value={input} onChange={this.handleInput} />
          <button onClick={this.handleCheck}>Check</button>
        </div>
      );
    }
    return (
      <div>
        <p style={style}>{question}</p>
        {body}
      </div>
    );
  }
}
