import React from 'react'
import './GetEpisodes.css'
const GetEpisodes = () => {
	return (
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
	)
}

export default GetEpisodes
