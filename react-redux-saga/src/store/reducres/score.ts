import * as actionTypes from '../actionTypes/score';

interface TotalScoreState {
  totalScore: number | null;
  loading: boolean;
  error: string | null;
}

const initialState: TotalScoreState = {
  totalScore: null,
  loading: false,
  error: null
};

export interface Action {
  type: string;
  payload?: any;
  loading: boolean;
  error:string | null;
}

type ActionHandler = (state: TotalScoreState, action: Action) => TotalScoreState;

const setFetchTotalScore: ActionHandler = (state, action) => ({
  ...state,
  totalScore: action.payload,
  loading: true,
  error: null
});

const fetchTotalScoreFailure: ActionHandler = (state, action) => ({
  ...state,
  loading: false,
  error: action.error
});

const fetchTotalScoreLoading: ActionHandler = (state, action) => ({
  ...state,
  loading: action.loading
});

const defaultHandler: ActionHandler = (state) => state;

const actionHandlers: Record<string, ActionHandler> = {
  [actionTypes.SET_FETCH_TOTAL_SCORE]: setFetchTotalScore,
  [actionTypes.SET_NOTIFICATION_ERROR]: fetchTotalScoreFailure,
  [actionTypes.SET_NOTIFICATION_LOADING]: fetchTotalScoreLoading,
  'default': defaultHandler
};

const totalScoreReducer = (state: TotalScoreState = initialState, action: Action): TotalScoreState => {
  const handler = actionHandlers[action.type] || actionHandlers['default'];
  return handler(state, action);
};

export default totalScoreReducer;
