import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getEpisodes } from '../../redux/episodes-reducer'
import './Episodes.css'
import GetEpisodes from './GetEpisodes/GetEpisodes'
const Episodes = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getEpisodes());
	}, [])
	let { breakingBadEpisodesData } = useSelector(state => state.episodes)
	let { betterCallSaulEpisodesData } = useSelector(state => state.episodes)
	let { currentSeason } = useSelector(state => state.episodes)
	return (
		<div className='episodes'>
			<div className='episodesTitle'>Choose Series</div>
			<GetEpisodes />
			{/* <div className='currentSeason'>{`Season ${currentSeason}`}</div>
			<div className='episodsList'>
				{episodesData.map(e => {
					return (
						<>
							{e.season == currentSeason ? <div className='episodesItems'>{e.season}</div> : ''}
						</>
					)
				})}
			</div> */}
		</div>
	)
}

export default Episodes
