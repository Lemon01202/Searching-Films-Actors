import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://www.breakingbadapi.com/api/'
})

export const charactersAPI = {
	getCharacters(limit, offset) {
		return instance.get(`characters?limit=${limit}&offset=${offset}`);
	},
	getCharactersLength() {
		return instance.get(`characters`);
	}
}

export const episodesAPI = {
	getEpisodes() {
		return instance.get(`episodes`);
	}
}