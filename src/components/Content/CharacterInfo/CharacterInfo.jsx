import React from 'react'
import { useSelector } from 'react-redux';
import './CharacterInfo.css'
const CharacterImage = () => {
	let { filterCharactersItems } = useSelector(state => state.characters);
	return (
		<div className='chatacters'>
			{filterCharactersItems.map(character => {
				return (
					<div className='character' key={character.char_id}>
						<div className='characterInfo'>
							<div className='characterData'>
								<div className='characterName'>{character.name}</div><br /><hr /><br />
								<div className='characterOccupation'>Category: {character.category}</div><br />
								<div className='characterBirthday'>Nickname: {character.nickname}</div><br />
								<div className='characterStatus'>Status: {character.status}</div><br />
								<div className='characterBirthday'>Birthday: {character.birthday}</div><br />
								<div className='characterOccupation'>Occupation: {character.occupation[0]}</div><br />
							</div>
							<div className='characterImgBlock'>{character.img ? <img src={character.img} className='characterImg' /> : ''}</div>
						</div>
					</div>
				)
			})}

		</div>
	)
}

export default CharacterImage
