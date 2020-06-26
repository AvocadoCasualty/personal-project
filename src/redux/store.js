import reducer from './reducer';
import {createStore, applyMiddleware, combineReducers} from "redux";
import promiseMiddleware from 'redux-promise-middleware';
import {composeWithDevTools} from "redux-devtools-extension";
import secondReducer from "./secondReducer";

const combinedReducer = combineReducers({reducer,secondReducer})

export default createStore(combinedReducer, composeWithDevTools(applyMiddleware(promiseMiddleware)))