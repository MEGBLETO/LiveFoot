import {FETCH_FIXTURES} from './actions';

const initialState = {
  fixtures: [],
  loading: false,
};

const fixturesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FIXTURES:
      return {
        ...state,
        fixtures: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default fixturesReducer;
