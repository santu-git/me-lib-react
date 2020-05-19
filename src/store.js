import { createStore, applyMiddleware, combineReducers } from 'redux';
import reduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import authorReducer from './reducers/authors';
export default createStore(
  combineReducers({authors: authorReducer}),
  {},
  composeWithDevTools(applyMiddleware(reduxThunk))
);
