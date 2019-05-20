import * as types from './index';

export const fetchQuestions = () => {
  return {
    type: types.FETCH_QUESTIONS
  }
};

export const resetAll = () => {
  return {
    type: types.RESET_ALL
  }
};

export const fetchQuestionsSuccess = (response) => {
  return {
    type: types.FETCH_QUESTIONS_SUCCESS,
    response
  }
};

export const fetchQuestionsError = (error) => {
  return {
    type: types.FETCH_QUESTIONS_ERROR,
    error
  }
};