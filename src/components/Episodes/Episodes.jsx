import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getEpisodes } from '../../redux/episodes-reducer'
import './Episodes.css'
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
			<div className='getEpisodes'>
				<div className='getEpisodesItem getBreakingBadEpisodes'>
					<img className='getEpisodesImg' src='https://buckil.com/buckil_image/1546401908breaking_bad.jpg' />
					<div className='getEpisodesTitle'>Breaking Bad</div>
				</div>

				<div className='getEpisodesItem getBetterCallSaulEpisodes'>
					<img className='getEpisodesImg' src='https://ts8.tarafdari.com/contents/user704516/content-image/81hlohhyul._ri_.jpg' />
					<div className='getEpisodesTitle'>Better Call Saul</div>
				</div>
			</div>
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
