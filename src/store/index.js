import {createStore, combineReducers} from "redux";
import {fillGradientReducer} from "./fillGradientReducer";
import { composeWithDevTools } from 'redux-devtools-extension';

const routReducer = combineReducers({
    gradient: fillGradientReducer
})

export const store = createStore(routReducer, composeWithDevTools())