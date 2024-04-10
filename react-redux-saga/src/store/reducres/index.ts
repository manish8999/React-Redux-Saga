// index.js
import { combineReducers } from 'redux';
import totalScoreReducer from './score';

const rootReducer = combineReducers({
  totalScore: totalScoreReducer
});

export default rootReducer;
