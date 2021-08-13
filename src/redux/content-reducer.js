import React from 'react'
import { contentAPI } from '../api/api';

const SET_CHARACTERS = 'GET_ACTORS';
const SET_IS_FECHING = 'SET_IS_FECHING';
const SET_SEARCHING_VALUE = 'SET_SEARCHING_VALUE';

const initialState = {
	charactersItems: [],
	isFetching: false,
	searchingValue: ''
}



const ContentReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_CHARACTERS:
			return {
				...state,
				charactersItems: action.payload
			}
		case SET_IS_FECHING:
			return {
				...state,
				isFetching: action.payload
			}
		case SET_SEARCHING_VALUE:
			return {
				...state,
				searchingValue: action.payload
			}
		default:
			return state;
	}
}

export const setCharacters = (payload) => ({ type: SET_CHARACTERS, payload });
export const setIsFetching = (state) => ({ type: SET_IS_FECHING, payload: state });
export const setSearchingValue = (value) => ({ type: SET_SEARCHING_VALUE, payload: value });


export const getCharacters = () => async (dispatch) => {
	dispatch(setIsFetching(true));
	const response = await contentAPI.getCharacters();
	dispatch(setIsFetching(false));
	dispatch(setCharacters(response.data));
}

export default ContentReducer;