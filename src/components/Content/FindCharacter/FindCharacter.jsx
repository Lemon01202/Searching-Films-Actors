import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setSearchingValue } from '../../../redux/content-reducer';
import './FindCharacter.css'
const FindCharacter = () => {
	const dispatch = useDispatch();
	const { searchingValue } = useSelector(state => state.content);
	const searchCharacter = (e) => {
		dispatch(setSearchingValue(e.target.value));
	}
	return (
		<div className='search'>
			<form>
				<input type='text' placeholder='Input Character...' className='findCharacter' onChange={searchCharacter} value={searchingValue} />
			</form>
		</div>
	)
}

export default FindCharacter
