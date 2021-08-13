import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getCharacters } from '../../../redux/content-reducer';
import './CharacterInfo.css'
const CharacterImage = () => {
	let { charactersItems } = useSelector(state => state.content)

	return (
		<>
			{charactersItems.map(character => {
				return (
					<div className='character' key={character.id}>
						<div className='characterInfo'>
							<div className='characterData'>
								<div className='characterName'>{character.name}</div><br /><hr /><br />
								<div className='characterBirthday'>Birthday: {character.birthday}</div><br />
								<div className='characterStatus'>Status: {character.status}</div><br />
								<div className='characterBirthday'>Nickname: {character.nickname}</div><br />
							</div>
							<div className='characterImgBlock'>{character.img ? <img src={character.img} className='characterImg' /> : ''}</div>
						</div>
					</div>
				)
			})}
		</>
	)
}

export default CharacterImage
