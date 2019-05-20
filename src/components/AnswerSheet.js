import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './AnswerSheet.css'

class AnswerSheet extends Component {

  getScore = () => {
    let score = 0;
    this.props.answerList.forEach((value, key) => {
      if (this.props.questionList[key].answers[this.props.userAnswerList.get(key)] === this.props.questionList[key].answers[value]) {
        score++;
      }
    })
    return `Your Score is ${score} / ${this.props.answerList.size}`;
  }

  render() {
    const answerList = this.props.answerList;
    const questionList = this.props.questionList;
    const userAnswerList = this.props.userAnswerList;

    const answers = [];
    answerList
      .forEach((value, key) => {
        const userAnswer = questionList[key].answers[userAnswerList.get(key)];
        const correctAnswer = questionList[key].answers[value];
        answers.push(
          <tr key={key} className={userAnswer === correctAnswer ? style.correct : style.wrong}>
            <td>{questionList[key].question}</td>
            <td>{userAnswer}</td>
            <td>{correctAnswer}</td>
          </tr>

        )
      })
    return (
      <div>
        <h3 align='center'>Your Score Card</h3>
        <table className={style.answers} align='center'>
          <tbody>
            <tr>
              <th>Question</th>
              <th>Your Answer</th>
              <th>Correct Answer</th>
            </tr>
            {answers}
          </tbody>
        </table>
        <h2 align='center'>{this.getScore()}</h2>
      </div>
    )
  }
}

AnswerSheet.propTypes = {
  answerList: PropTypes.object.isRequired,
  questionList: PropTypes.array.isRequired,
  userAnswerList: PropTypes.object.isRequired
};

export default AnswerSheet;