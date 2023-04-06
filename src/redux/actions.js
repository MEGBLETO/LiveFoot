import axios from 'axios';

export const SET_APP_LANGUAGE = 'SET_APP_LANGUAGE';

export const setLanguage = language => dispatch => {
  dispatch({
    type: SET_APP_LANGUAGE,
    payload: language,
  });
};

export const FETCH_FIXTURES = 'FETCH_FIXTURES';

export const fetchfixtures = () => {
  return async dispatch => {
    try {
      const res = await axios.get(
        `https://api.sportmonks.com/v3/football/fixtures/between/2023-01-01/2023-03-31?api_token=CjDvBzmtKDVn3RWgPAzcaLUYoheYE6GFeXASUgjVnvLuwGSuW3QuFfrHi6py&include=statistics;participants;lineups.type;lineups.position;lineups.details;lineups;events`
      );
      dispatch({
        type: FETCH_FIXTURES,
        payload: res.data.data
      });
    } catch (error) {
      console.log(error, "here");
    }
  };
};
