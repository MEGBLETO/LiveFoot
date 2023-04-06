import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import languageReducer from './reducers';
import fixturesReducer from './fixturereducer';
import championshipDataReducer from './championshipsDataReducer';

const rootReducer = combineReducers({
  languageReducer,
  fixturesReducer,
  championshipDataReducer,
});

export const Store = createStore(rootReducer, applyMiddleware(thunk));
