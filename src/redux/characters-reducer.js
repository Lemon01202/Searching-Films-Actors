import React from 'react'
import { charactersAPI } from '../api/api';

const SET_CHARACTERS = 'GET_ACTORS';
const SET_CHARACTERS_LENGTH = 'SET_CHARACTERS_LENGTH';
const SET_IS_FECHING = 'SET_IS_FECHING';
const SET_SEARCHING_VALUE = 'SET_SEARCHING_VALUE';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_OFFSET = 'SET_OFFSET';
const SEARCH_CHARACTERS_BY_NAME = 'SEARCH_CHARACTERS_BY_NAME';


const initialState = {
	charactersItems: [],
	filterCharactersItems: [],
	charactersItemsLength: 0,
	isFetching: false,
	searchingValue: '',
	limits: 8,
	offset: 0,
	page: 1
}



const ContentReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_CHARACTERS:
			return {
				...state,
				charactersItems: action.payload,
				filterCharactersItems: action.payload
			}
		case SET_IS_FECHING:
			return {
				...state,
				isFetching: action.payload,
			}
		case SET_SEARCHING_VALUE:
			return {
				...state,
				searchingValue: action.payload,
			}
		case SET_CHARACTERS_LENGTH:
			return {
				...state,
				charactersItemsLength: action.payload,
			}
		case SET_CURRENT_PAGE:
			return {
				...state,
				page: action.payload,
				offset: (action.payload - 1) * state.limits
			}
		case SET_OFFSET:
			return {
				...state,
				offset: action.payload,
			}
		case SEARCH_CHARACTERS_BY_NAME:
			return {
				...state,
				filterCharactersItems: state.charactersItems.filter(i => i.name.toLowerCase().includes(state.searchingValue.toLowerCase()))

			}
		default:
			return state;
	}
}

export const setCharacters = (payload) => ({ type: SET_CHARACTERS, payload });
export const setCharactersLength = (length) => ({ type: SET_CHARACTERS_LENGTH, payload: length });
export const setIsFetching = (state) => ({ type: SET_IS_FECHING, payload: state });
export const setSearchingValue = (value) => ({ type: SET_SEARCHING_VALUE, payload: value });
export const setCurrentPage = (page) => ({ type: SET_CURRENT_PAGE, payload: page });
export const setOffset = (page) => ({ type: SET_OFFSET, payload: page });
export const searchCharactersByName = (value) => ({ type: SEARCH_CHARACTERS_BY_NAME, payload: value });


export const getCharacters = (limit, offset) => async (dispatch) => {
	dispatch(setIsFetching(true));
	const response = await charactersAPI.getCharacters(limit, offset);
	dispatch(setIsFetching(false));
	dispatch(setCharacters(response.data));
}

export const getCharactersLength = () => async (dispatch) => {
	const response = await charactersAPI.getCharactersLength();
	dispatch(setCharactersLength(response.data.length));
}

export default ContentReducer;