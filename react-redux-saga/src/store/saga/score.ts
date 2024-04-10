import { takeEvery, put } from 'redux-saga/effects';
import { fetchTotalScoreSuccess, fetchTotalScoreFailure, fetchTotalScoreLoading } from '../actions/score';
import { fetchTotalScore as apiFetchTotalScore } from '../../api/score';
import { GET_FETCH_TOTAL_SCORE } from '../actionTypes/score';

function* fetchTotalScoreSaga(): Generator<any, void, any> {
  try {

    yield put(fetchTotalScoreLoading(true));

    const totalScore = yield apiFetchTotalScore();

    yield put(fetchTotalScoreSuccess(totalScore));

    yield put(fetchTotalScoreLoading(false));

  } catch (error) {

    yield put(fetchTotalScoreLoading(false));
    yield put(fetchTotalScoreFailure(error));
  }
}

function* totalScoreSaga() {
  yield takeEvery(GET_FETCH_TOTAL_SCORE, fetchTotalScoreSaga);
}

export default totalScoreSaga;
