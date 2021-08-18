import React from 'react'
import { useDispatch } from 'react-redux'
import { setCategory } from '../../../redux/episodes-reducer';
import './GetEpisodes.css'
const GetEpisodes = () => {
	const dispatch = useDispatch();
	const BreakingBadOnClick = () => {
		dispatch(setCategory('BreakingBad'));
	}

	const BetterCallSaulOnClick = () => {
		dispatch(setCategory('BetterCallSaul'));
	}
	return (
		<div className='getEpisodes'>
			<div className='getEpisodesItem getBreakingBadEpisodes' onClick={BreakingBadOnClick}>
				<img className='getEpisodesImg' src='https://buckil.com/buckil_image/1546401908breaking_bad.jpg' />
				<div className='getEpisodesTitle'>Breaking Bad</div>
			</div>

			<div className='getEpisodesItem getBetterCallSaulEpisodes' onClick={BetterCallSaulOnClick}>
				<img className='getEpisodesImg' src='https://ts8.tarafdari.com/contents/user704516/content-image/81hlohhyul._ri_.jpg' />
				<div className='getEpisodesTitle'>Better Call Saul</div>
			</div>
		</div>
	)
}

export default GetEpisodes
