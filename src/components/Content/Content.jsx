import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Preloader from '../../preloader/Preloader';
import { getCharacters, getCharactersLength } from '../../redux/characters-reducer';
import CharacterInfo from './CharacterInfo/CharacterInfo';
import './Content.css'
import FindCharacter from './FindCharacter/FindCharacter';
import PagesPagination from './PagesPagination/PagesPagination';

const Content = () => {
	let dispatch = useDispatch();
	let { isFetching } = useSelector(state => state.characters);
	let { limits } = useSelector(state => state.characters)
	let { offset } = useSelector(state => state.characters)
	useEffect(() => {
		dispatch(getCharacters(limits, offset));
		dispatch(getCharactersLength());
	}, [getCharacters, limits, offset, getCharactersLength]);
	return (
		<>
			<FindCharacter />
			<div className='content'>
				{isFetching ? <div className='characterPreloader'><Preloader /></div> : <CharacterInfo />}
				<PagesPagination />
			</div>
		</>
	)
}

export default Content
