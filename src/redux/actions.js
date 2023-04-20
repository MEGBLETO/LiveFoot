/* eslint-disable prettier/prettier */
import axios from 'axios';
import {formatDate} from '../services/formatDate';

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

export const fetchfixtures = (currentPage) => {
  return async dispatch => {
    try {
      let startDate = new Date();
      let endDate = new Date(new Date().setDate(startDate.getDate() + 3));
      const res = await axios.get(
        `https://api.sportmonks.com/v3/football/fixtures/between/${formatDate(startDate)}/${formatDate(endDate)}?api_token=8hLDCAjFKrGgNrCuyeGxfsie7nXX4jaW8hCrVi75165ef2V5c1bhG2lqhO18&include=statistics;statistics.type;participants;league;league.country;lineups.type;lineups.position;lineups.details;lineups;events;events.type;state;events.participant&page=${currentPage}`
      );
      const sortData = res.data.data.sort(
        (a, b) => a.starting_at_timestamp - b.starting_at_timestamp,
      );
      dispatch({
        type: FETCH_FIXTURES,
        payload: sortData,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
