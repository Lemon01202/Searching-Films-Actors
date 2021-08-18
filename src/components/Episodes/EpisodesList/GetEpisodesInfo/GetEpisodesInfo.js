import React from 'react'
import './GetEpisodesInfo.css'
const GetEpisodesInfo = (props) => {

	return (
		<>
			{props.episodesInfo.map(e => {
				return (
					<>
						{
							e.season == props.currentSeason
								?
								<div className='episodesItems'>
									<div className='item'>Season #{e.season}</div><br />
									<div className='item'>Episode #{e.episode}</div><br /><hr /><br />
									<div className='item'>Title: {e.title}</div><br />
									<div className='item'>Air Date: {e.air_date}</div>

								</div>
								:
								''}
					</>
				)
			})}
		</>
	)
}
export default GetEpisodesInfo
