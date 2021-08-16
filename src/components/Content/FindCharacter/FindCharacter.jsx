import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { searchCharactersByName, setSearchingValue } from '../../../redux/characters-reducer';
import './FindCharacter.css'
const FindCharacter = () => {
	const dispatch = useDispatch();
	const { searchingValue } = useSelector(state => state.characters);
	const searchCharacter = (e) => {
		dispatch(setSearchingValue(e.target.value));
	}
	useEffect(() => {
		dispatch(searchCharactersByName(searchingValue));
	}, [searchingValue])
	return (
		<div className='search'>
			<form>
				<input type='text' placeholder='Input Character...' className='findCharacter' onChange={searchCharacter} value={searchingValue} />
			</form>
		</div>
	)
}

export default FindCharacter
