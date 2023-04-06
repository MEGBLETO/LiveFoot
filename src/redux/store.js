import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import languageReducer from "./reducers";
import fixturesReducer from "./fixturereducer";








const rootReducer = combineReducers({languageReducer, fixturesReducer})





export const Store = createStore(rootReducer, applyMiddleware(thunk))