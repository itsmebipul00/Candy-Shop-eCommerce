import { AiOutlineSearch } from 'react-icons/ai'

import { styles } from '../../utils/iconStyles'

import { LogoProvider } from '../../assets/Icons/Icons'

import { useProducts } from '../../actionProviders/productActions'

import { useState } from 'react'

import { Link } from 'react-router-dom'

import { debounce } from '../../utils/debounce'

import './Search.css'

export const Search = () => {
	const searchIconStyle = {
		...styles,
		className: styles.className.concat(' search-icon'),
	}

	const [search, setSearch] = useState('')
	const { products } = useProducts()

	const searchFilters = debounce(text => {
		setSearch(text)
	}, 1000)

	const searchedProducts = products?.filter(pro =>
		pro.title.toLowerCase().includes(search)
	)

	return (
		<div className='p-relative'>
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
			{search.length > 0 && (
				<div className='searched-products p-absolute'>
					{searchedProducts.map((pro, idx) => (
						<Link
							to={`/product/${pro._id}`}
							className='searched-product d-flex'>
							<img
								src={pro.image}
								alt={pro.image}
								className='searched-img'
							/>
							<p className='searched-title fs-500'>{pro.title}</p>
						</Link>
					))}
				</div>
			)}
		</div>
	)
}
