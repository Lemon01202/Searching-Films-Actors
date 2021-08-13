import { applyMiddleware, combineReducers, createStore } from "redux";
import contentReducer from "./content-reducer";
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
let reducers = combineReducers({
	content: contentReducer
});
export const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunkMiddleware)));
window.store = store;