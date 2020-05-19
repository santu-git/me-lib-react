import { AUTHORS_STATE } from '../constants.js'

const INITIAL_STATE={
  isFetching: false,
  isError: false,
  errorMessage: '',
  authors: []
}

const authorReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTHORS_STATE.REQUEST_FETCH:
      state = {
        ...state,
        isFetching: true
      };
      break;
    case AUTHORS_STATE.FETCH_SUCCESS:
      state = {
        ...state,
        isFetching: false,
        authors: action.payload
      };
      break;
    case AUTHORS_STATE.FETCH_ERROR:
      state = {
        ...state,
        isFetching: false,
        isError: true,
        errorMessage: action.payload
      };
      break;
    default:
      state = {...state}
  }
  return state;
};
export default authorReducer;
