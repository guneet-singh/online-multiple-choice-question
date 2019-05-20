import { takeLatest, put, call } from 'redux-saga/effects';
import 'regenerator-runtime/runtime';

import { fetchQuestionsService } from '../services/fetchQuestionsService';
import { fetchAnswerKey } from '../services/fetchAnswerKey';
import * as types from '../actions';

function* fetchQuestions() {
  try {
    const response = yield call(fetchQuestionsService);
    const setNumber = Math.floor(Math.random() * 4) + 1;
    const questionSet = `questions${setNumber}`;
    const result = response[questionSet];
    yield put({ type: types.FETCH_QUESTIONS_SUCCESS, result });
    yield put({ type: types.SET_SETNUMBER, result: setNumber });
  } catch (error) {
    yield put({ type: types.FETCH_QUESTIONS_ERROR, error });
  }
}

function* submitAnswers({ setNumber }) {
  try {
    const response = yield call(fetchAnswerKey, setNumber);
    const result = convertResult(response);
    yield put({ type: types.SET_RESPONSE, result });
  } catch (error) {
    yield put({ type: types.FETCH_ANSWERS_ERROR, error });
  }
}

const convertResult = (response) => {
  let resultMap = new Map();
  response.forEach(e => {
    resultMap.set(e.id, e.answer);
  })
  return resultMap
}

export default function* watchFetchAction() {
  yield takeLatest(types.FETCH_QUESTIONS, fetchQuestions);
  yield takeLatest(types.SUBMIT_ANSWERS, submitAnswers);
}