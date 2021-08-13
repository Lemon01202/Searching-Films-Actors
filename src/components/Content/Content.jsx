import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Preloader from '../../preloader/Preloader';
import { getCharacters } from '../../redux/content-reducer';
import CharacterInfo from './CharacterInfo/CharacterInfo';
import './Content.css'
import FindCharacter from './FindCharacter/FindCharacter';
const Content = () => {
	let dispatch = useDispatch();
	let { isFetching } = useSelector(state => state.content);
	useEffect(() => {
		dispatch(getCharacters());
	}, [getCharacters]);
	return (
		<>
			<FindCharacter />
			<div className='content'>
				{isFetching ? <div className='characterPreloader'><Preloader /></div> : <CharacterInfo />}
			</div>
		</>
	)
}

export default Content
