import axios from 'axios';

export const SET_APP_LANGUAGE = 'SET_APP_LANGUAGE';
export const SET_APP_THEME_MODE = 'SET_APP_THEME_MODE';
export const FETCH_FIXTURES = 'FETCH_FIXTURES';

export const setLanguage = language => dispatch => {
  dispatch({
    type: SET_APP_LANGUAGE,
    payload: language,
  });
};

export const setThemeMode = themeMode => dispatch => {
  dispatch({
    type: SET_APP_THEME_MODE,
    payload: themeMode,
  });
};

export const fetchfixtures = () => {
  return async dispatch => {
    try {
      const res = await axios.get(
        'https://api.sportmonks.com/v3/football/fixtures/between/2023-04-10/2023-04-16?api_token=8hLDCAjFKrGgNrCuyeGxfsie7nXX4jaW8hCrVi75165ef2V5c1bhG2lqhO18&include=statistics;statistics.type;participants;league;league.country;lineups.type;lineups.position;lineups.details;lineups;events;events.type;state;events.participant',
      );
      dispatch({
        type: FETCH_FIXTURES,
        payload: res.data.data,
      });
    } catch (error) {
      console.log(error, 'here');
    }
  };
};
