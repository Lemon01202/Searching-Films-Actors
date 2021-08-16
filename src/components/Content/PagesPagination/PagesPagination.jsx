import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentPage } from '../../../redux/characters-reducer';
import './PagesPagination.css'
const PagesPagination = () => {
	let dispatch = useDispatch();
	let { charactersItemsLength } = useSelector(state => state.characters)
	let { limits } = useSelector(state => state.characters)
	let { page } = useSelector(state => state.characters)
	let pageSize = Math.ceil(charactersItemsLength / limits)
	let pages = []
	for (let i = 1; i <= pageSize; i++) {
		pages[i - 1] = i;
	}


	return (
		<div className='characterPagination'>
			{pages.map(p => {
				return <div className={`pagesNumber ${page === p && 'currentPage'}`} onClick={() => { dispatch(setCurrentPage(p)); }}>{p}</div>
			})}
		</div>
	)
}

export default PagesPagination
