import { combineReducers } from 'redux';
import questions from './questionReducer';
import answers from './answersReducer';

const rootReducer = combineReducers({
    questions,
    answers
});

export default rootReducer;