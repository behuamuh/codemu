import React, { Component } from 'react';

export default class Task80 extends Component {
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
    answers: [],
    question: 0,
    isFinish: false,
  };

  checkAnswer = index => value => {
    const { answers } = this.state;
    answers[index] = value;
    this.setState({
      answers: [...answers.slice(0, index), value, ...answers.slice(index + 1)],
    });
  };

  finish = () => {
    this.setState({ isFinish: true });
  };

  changeQuestion = delta => () => {
    const { test, question } = this.state;
    let next = question + delta;
    if (next < 0 || next >= test.length) {
      next = question;
    }
    this.setState({ question: next });
  };

  reloadTest = () => {
    this.setState({
      answers: [],
      question: 0,
      isFinish: false,
    });
  };

  render() {
    const { test, question, answers, isFinish } = this.state;
    if (isFinish) {
      const list = test.map((item, index) => {
        return (
          <Result
            question={item.question}
            valid={item.answers[item.right - 1] === answers[index]}
            userAnswer={answers[index]}
          />
        );
      });
      return (
        <div>
          {list}
          <button onClick={this.reloadTest}>Test again</button>
        </div>
      );
    }

    let answered = 0;
    const list = test.map((item, index) => {
      if (answers[index]) {
        answered++;
      }
      return (
        <Question
          key={index}
          active={index === question}
          {...item}
          isAnswered={answers[index]}
          checkAnswer={this.checkAnswer(index)}
        />
      );
    });

    return (
      <div>
        {list}
        <br />
        <button onClick={this.changeQuestion(-1)}>Prev</button>
        <button onClick={this.changeQuestion(1)}>Next</button>
        <br />
        {answered < test.length ? null : (
          <button onClick={this.finish}>Show results</button>
        )}
      </div>
    );
  }
}

class Question extends Component {
  state = {
    input: '',
  };

  handleInput = event => {
    this.setState({ input: event.target.value });
  };

  handleCheck = () => {
    const { input } = this.state;
    this.props.checkAnswer(input);
    this.setState({ input: '' });
  };

  render() {
    const { input } = this.state;
    const { question, isAnswered, active, answers } = this.props;

    const body = isAnswered ? null : (
      <div>
        {answers.map((answer, index) => {
          return (
            <li key={index}>
              <input
                type="radio"
                value={answer}
                checked={input === answer}
                onChange={this.handleInput}
              />
              {answer}
            </li>
          );
        })}
        <button onClick={this.handleCheck}>Check</button>
      </div>
    );
    return (
      <div style={{ display: active ? 'block' : 'none' }}>
        <p>{question}</p>
        {body}
      </div>
    );
  }
}

class Result extends Component {
  render() {
    const { valid, question, userAnswer } = this.props;
    const style = { color: valid ? 'green' : 'red' };

    return (
      <div style={style}>
        <p>{question}</p>
        Ваш ответ {userAnswer}, {valid ? 'правильно' : 'не правильно'}
      </div>
    );
  }
}
