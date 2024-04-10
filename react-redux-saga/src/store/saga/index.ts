// index.js
import { all } from 'redux-saga/effects';
import totalScoreSaga from './score';

function* rootSaga() {
  yield all([
    totalScoreSaga()
  ]);
}

export default rootSaga;
