import * as types from '../actions';

const initState = {};

export default function (state = [], action) {
  let response = action.result;
  switch (action.type) {
    case types.SET_RESPONSE:
      return { ...state, response };
    case types.RESET_ALL:
      return initState;
    case types.FETCH_ANSWERS_ERROR:
      return { ...state, response };
    default:
      return state;
  }
}