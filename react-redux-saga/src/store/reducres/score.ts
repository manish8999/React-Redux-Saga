import { FETCH_TOTAL_SCORE, FETCH_TOTAL_SCORE_SUCCESS, FETCH_TOTAL_SCORE_FAILURE } from '../actionTypes/score';

const initialState = {
  totalScore: null,
  loading: false,
  error: null
};

const totalScoreReducer = (state = initialState, action:any) => {
  switch (action.type) {
    case FETCH_TOTAL_SCORE:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_TOTAL_SCORE_SUCCESS:
      return {
        ...state,
        totalScore: action.payload,
        loading: false,
        error: null
      };
    case FETCH_TOTAL_SCORE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default totalScoreReducer;
