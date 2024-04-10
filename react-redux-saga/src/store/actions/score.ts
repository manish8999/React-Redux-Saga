import { FETCH_TOTAL_SCORE, FETCH_TOTAL_SCORE_SUCCESS, FETCH_TOTAL_SCORE_FAILURE } from '../actionTypes/score';

export const fetchTotalScore = () => ({
  type: FETCH_TOTAL_SCORE
});

export const fetchTotalScoreSuccess = (totalScore:any) => ({
  type: FETCH_TOTAL_SCORE_SUCCESS,
  payload: totalScore
});

export const fetchTotalScoreFailure = (error:any) => ({
  type: FETCH_TOTAL_SCORE_FAILURE,
  payload: error
});
