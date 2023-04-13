import {SET_APP_LANGUAGE} from './actions';

const initialState = {
  language: 'Fr',
};

function languageReducer(state = initialState, action) {
  switch (action.type) {
    case SET_APP_LANGUAGE:
      return {...state, language: action.payload};

    default:
      return state;
  }
}

export default languageReducer;
