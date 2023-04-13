import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import languageReducer from './reducers';
import fixturesReducer from './fixturereducer';
import themeReducer from './themeReducer';

const rootReducer = combineReducers({
  languageReducer,
  fixturesReducer,
  themeReducer,
});

export const Store = createStore(rootReducer, applyMiddleware(thunk));
