import * as types from '../actions';

export default function (state = [], action) {
  const response = action.result;

  switch (action.type) {
    case types.FETCH_QUESTIONS_SUCCESS:
      const questions = response || null;
      return { ...state, questions };
    case types.SET_SETNUMBER:
    const setNumber = response || null;
      return { ...state, setNumber };
    case types.FETCH_QUESTIONS_ERROR:
      return { ...state, response };
    default:
      return state;
  }
}