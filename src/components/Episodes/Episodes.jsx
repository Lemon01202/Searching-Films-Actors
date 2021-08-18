import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getEpisodes, setCurrentSeason } from '../../redux/episodes-reducer'
import './Episodes.css'
import GetEpisodes from './GetEpisodes/GetEpisodes'
import EpisodesList from './EpisodesList/EpisodesList'
const Episodes = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getEpisodes());
	}, [])
	let { currentSeason } = useSelector(state => state.episodes)

	// useEffect(() => {
	// 	if (currentSeason < 1) {
	// 		dispatch(setCurrentSeason(1))
	// 	}

	// }, [currentSeason])

	const prevSesonOnClick = () => {
		dispatch(setCurrentSeason(currentSeason - 1));
	}

	const nextSesonOnClick = () => {
		dispatch(setCurrentSeason(currentSeason + 1));
	}

	return (
		<div className='episodes'>
			<div className='currentSeason'>
				<div className='prevSeason' onClick={prevSesonOnClick}>{'<<'}</div>
				{`Season ${currentSeason}`}
				<div className='nextSeason' onClick={nextSesonOnClick}>{'>>'}</div>
			</div>
			<div className='episodesTitle'>Choose Series</div>
			<GetEpisodes />
			<EpisodesList />

		</div>
	)
}

export default Episodes
