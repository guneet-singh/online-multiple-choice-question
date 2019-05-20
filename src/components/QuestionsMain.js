import React, { Component } from 'react';
import { connect } from 'react-redux';

import Questions from './Questions'
import AnswerSheet from './AnswerSheet'
import { fetchQuestions, resetAll } from '../actions/questionActions';
import { submitAnswers } from '../actions/answerActions';
import style from './QuestionsMain.css'

class QuestionsMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userAnswers: new Map(),
      answers: new Map()
    }
  }

  componentDidMount = () => {
    this.props.dispatch(fetchQuestions());
  }

  resetAll = () => {
    this.setState({ userAnswers: new Map() });
    this.props.dispatch(resetAll());
    this.props.dispatch(fetchQuestions());
  }
  handleClick = () => {
    this.props.dispatch(submitAnswers(this.props.questionsList.setNumber));
  }

  onChange = (quesId, answerId) => {
    var newMap = new Map(this.state.userAnswers)
    newMap.set(quesId, answerId);
    this.setState({ userAnswers: newMap });
  }

  render() {
    const { questions } = this.props.questionsList;
    const answers = this.props.answerList;
    return (
      <div>
        {!answers && <div id='questions_container'>
          <table className={style.questions} border='0' cellPadding='0' cellSpacing='0'>

            {questions && questions.map((value, index) =>
              <Questions
                question={value}
                key={index}
                onChange={this.onChange}
              />
            )}

          </table>
          <input
            type='button'
            value='Submit Answers'
            onClick={this.handleClick}
            className={(questions === undefined || (this.state.userAnswers.size < questions.length)) ? style.disabled : style.button}
            disabled={questions === undefined || (this.state.userAnswers.size < questions.length)}
          />
        </div>}
        {(answers && !!this.state.userAnswers.size) && <div>
          <AnswerSheet
            answerList={answers}
            questionList={questions}
            userAnswerList={this.state.userAnswers}
          />
          <input
            type='button'
            value='Another Attempt?'
            onClick={this.resetAll}
            className={style.button}
          />
        </div>
        }
      </div>
    )
  }
}

const mapStateToProps = (storeData) => ({
  questionsList: storeData.questions,
  answerList: storeData.answers.response
});

export default connect(mapStateToProps)(QuestionsMain);