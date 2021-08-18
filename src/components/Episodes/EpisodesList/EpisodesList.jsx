import React from 'react'
import { useSelector } from 'react-redux'
import './EpisodesList.css'
import GetEpisodesInfo from './GetEpisodesInfo/GetEpisodesInfo'

const EpisodesList = () => {
	let { currentSeason } = useSelector(state => state.episodes)
	let { category } = useSelector(state => state.episodes)
	let { breakingBadEpisodesData } = useSelector(state => state.episodes)
	let { betterCallSaulEpisodesData } = useSelector(state => state.episodes)


	return (
		<div className='episodsList'>
			{
				category == 'BreakingBad' ? <GetEpisodesInfo currentSeason={currentSeason} episodesInfo={breakingBadEpisodesData} /> : '' || 
				category == 'BetterCallSaul' ? <GetEpisodesInfo currentSeason={currentSeason} episodesInfo={betterCallSaulEpisodesData} /> : ''

			}
		</div>
	)
}
export default EpisodesList
