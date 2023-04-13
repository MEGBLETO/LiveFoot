import {SET_APP_THEME_MODE} from './actions';

const initialState = {
  isDarkMode: false,
};

function themeReducer(state = initialState, action) {
  switch (action.type) {
    case SET_APP_THEME_MODE:
      return {...state, isDarkMode: action.payload};

    default:
      return state;
  }
}

export default themeReducer;
