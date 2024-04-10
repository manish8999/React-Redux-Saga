import { takeEvery, put } from 'redux-saga/effects';
import { fetchTotalScoreSuccess, fetchTotalScoreFailure } from '../actions/score';
import { fetchTotalScore as apiFetchTotalScore } from '../api/score';
import { FETCH_TOTAL_SCORE } from '../actionTypes/score';

function* fetchTotalScoreSaga(): Generator<any, void, any> { 
  try {
    const totalScore = yield apiFetchTotalScore();
    yield put(fetchTotalScoreSuccess(totalScore));
  } catch (error) {
    yield put(fetchTotalScoreFailure(error));
  }
}

function* totalScoreSaga() {
  yield takeEvery(FETCH_TOTAL_SCORE, fetchTotalScoreSaga);
}

export default totalScoreSaga;
