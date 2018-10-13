import React, { Component } from 'react';
import './Task66.css';

export default class Task66 extends Component {
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
      const { question, answers, right } = item;
      return (
        <Question
          key={index}
          question={question}
          answers={answers}
          right={right}
        />
      );
    });
    return <div>{list}</div>;
  }
}

class Question extends Component {
  state = {
    value: '',
    questClass: '',
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = () => {
    const questClass =
      +this.state.value === this.props.right ? 'validAnswer' : 'invalidAnswer';
    this.setState({ questClass });
  };

  render() {
    const { value, questClass } = this.state;
    const { question, answers } = this.props;
    const list = answers.map((answer, index) => {
      return (
        <p>
          <input
            type="radio"
            value={index + 1}
            checked={+value === index + 1}
            onChange={this.handleChange}
          />
          {answer}
        </p>
      );
    });
    return (
      <div>
        <p className={questClass}>{question}</p>
        {list}
        <button disabled={questClass !== ''} onClick={this.handleSubmit}>
          Send
        </button>
      </div>
    );
  }
}
