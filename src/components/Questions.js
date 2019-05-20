import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './Questions.css'

class Questions extends Component {

  onChange = e => {
    this.props.onChange(e.currentTarget.name, e.currentTarget.value);
  }

  render() {
    let { id, question, answers } = this.props.question;
    return (
      <tbody className={style.rows}>
        <tr>
          <td>
            <h4>{question}</h4>
          </td>
        </tr>
        {
          answers.map((value, index) =>
            <tr key={index}>
              <td>
                <label key={index}>
                  <input
                    type='radio'
                    name={id}
                    value={index}
                    onChange={this.onChange}
                  />
                  {value}
                </label>
              </td>
            </tr>
          )
        }
      </tbody>
    )
  }
}


Questions.propTypes = {
  question: PropTypes.object.isRequired
};

export default Questions;