import * as types from './index';

export const submitAnswers = setNumber => {
  return {
    type: types.SUBMIT_ANSWERS,
    setNumber
  }
};