import { applyMiddleware, combineReducers, createStore } from "redux";
import characters from "./characters-reducer";
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import episodes from "./episodes-reducer";
let reducers = combineReducers({
	characters,
	episodes
});
export const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunkMiddleware)));
window.store = store;