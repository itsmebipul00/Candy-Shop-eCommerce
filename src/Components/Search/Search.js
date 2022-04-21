import { AiOutlineSearch } from 'react-icons/ai'

import { styles } from '../../utils/iconStyles'

import { LogoProvider } from '../../assets/Icons/Icons'

import { useProducts } from '../../actionProviders/productActions'

export const Search = () => {
	const searchIconStyle = {
		...styles,
		className: styles.className.concat(' search-icon'),
	}

	const { searchFilters } = useProducts()

	return (
		<div className='search-candies p-relative'>
			<label className='sr-only' htmlFor='input-search' />

			<input
				id='input-search'
				className='input-search'
				placeholder='Search for candies...'
				onChange={e => searchFilters(e.target.value.toLowerCase())}
			/>

			<LogoProvider>
				<AiOutlineSearch value={searchIconStyle} />
			</LogoProvider>
		</div>
	)
}
