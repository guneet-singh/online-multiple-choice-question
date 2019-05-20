import { fork } from 'redux-saga/effects';
import watchFetchAction from './questionAnswerSaga';

export default function* initSagas() {
  yield fork(watchFetchAction);
}