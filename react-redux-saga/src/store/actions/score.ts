import { GET_FETCH_TOTAL_SCORE, SET_FETCH_TOTAL_SCORE, SET_NOTIFICATION_ERROR,SET_NOTIFICATION_LOADING } from '../actionTypes/score';

export const fetchTotalScore = () => ({
  type: GET_FETCH_TOTAL_SCORE
});

export const fetchTotalScoreSuccess = (payload:any) => ({
  type: SET_FETCH_TOTAL_SCORE,
  payload
});

export const fetchTotalScoreFailure = (error:any) => ({
  type: SET_NOTIFICATION_ERROR,
  error
});

export const fetchTotalScoreLoading = (loading:any) => ({
  type: SET_NOTIFICATION_LOADING,
  loading
});