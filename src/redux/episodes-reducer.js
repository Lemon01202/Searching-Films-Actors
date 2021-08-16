import React from 'react'
import { charactersAPI, episodesAPI } from '../api/api';

const SET_BREAKINGBAD_EPISODES = 'SET_BREAKINGBAD_EPISODES';
const SET_BETTERCALLSAUL_EPISODES = 'SET_BETTERCALLSAUL_EPISODES';



const initialState = {
	breakingBadEpisodesData: [],
	betterCallSaulEpisodesData: [],
	currentSeason: 1
}



const EpisodesReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_BREAKINGBAD_EPISODES:
			return {
				...state,
				breakingBadEpisodesData: action.payload
			}
		case SET_BETTERCALLSAUL_EPISODES:
			return {
				...state,
				betterCallSaulEpisodesData: action.payload
			}
		default:
			return state;
	}
}

export const setBreakingBadEpisodes = (episodes) => ({ type: SET_BREAKINGBAD_EPISODES, payload: episodes });
export const setBetterCallSaulEpisodes = (episodes) => ({ type: SET_BETTERCALLSAUL_EPISODES, payload: episodes });

export const getEpisodes = () => async (dispatch) => {
	let response = await episodesAPI.getEpisodes();
	let breakingBadEpisodesData = [];
	let betterCallSaulEpisodesData = [];
	response.data.map(d => d.series == 'Breaking Bad' ? breakingBadEpisodesData.push(d) : betterCallSaulEpisodesData.push(d)); //
	dispatch(setBreakingBadEpisodes(breakingBadEpisodesData))
	dispatch(setBetterCallSaulEpisodes(betterCallSaulEpisodesData))
}


export default EpisodesReducer;