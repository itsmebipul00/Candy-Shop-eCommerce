import { AiOutlineSearch } from 'react-icons/ai'

import { styles } from '../../Utils/iconStyles'

import { LogoProvider } from '../../Assets/Icons'

import { useProducts } from '../../Providers'

import { useState, useRef, useEffect } from 'react'

import { Link } from 'react-router-dom'

import { useClickOutside } from '../../Hooks/useClickOutside'

import { useDebounce } from '../../Hooks/useDebounce'

import './Search.css'

export const Search = () => {
	const searchIconStyle = {
		...styles,
		className: styles.className.concat(' search-icon'),
	}

	const [search, setSearch] = useState('')

	const [debouncedSearch, setDebouncedSearch] = useState('')

	const { products } = useProducts()

	const [open, setOpen] = useState(false)

	const searchRef = useRef()

	useClickOutside(searchRef, () => {
		if (open) {
			setOpen(false)
			setSearch('')
		}
	})

	useDebounce(() => setDebouncedSearch(search), 1000, [search])

	const searchedProducts = products?.filter(pro =>
		pro.title.toLowerCase().includes(debouncedSearch)
	)

	useEffect(() => {
		if (debouncedSearch.length > 0) {
			setOpen(true)
		}
	}, [debouncedSearch])

	return (
		<div className='p-relative'>
			<div className='search-candies p-relative'>
				<label className='sr-only' htmlFor='input-search' />

				<input
					id='input-search'
					className='input-search'
					placeholder='Search for candies...'
					autoComplete='off'
					value={search}
					onChange={e => setSearch(e.target.value.toLowerCase())}
				/>

				<LogoProvider>
					<AiOutlineSearch value={searchIconStyle} />
				</LogoProvider>
			</div>
			{
				<div
					className='searched-products p-absolute'
					style={{ display: open ? 'block' : 'none' }}
					ref={searchRef}>
					{searchedProducts.length > 0 ? (
						searchedProducts.map((pro, idx) => (
							<Link
								key={idx}
								to={`/product/${pro._id}`}
								className='searched-product d-flex'>
								<img
									src={pro.image}
									alt={pro.image}
									className='searched-img'
								/>
								<p className='searched-title fs-500'>{pro.title}</p>
							</Link>
						))
					) : (
						<div className='no-candies-wrapper'>
							<h2 className='text-blue text-center fs-700'>
								No candies found
							</h2>
							<img
								src={'/images/no-candies.png'}
								alt='no-candies'
								className='no-candies'
							/>
						</div>
					)}
				</div>
			}
		</div>
	)
}
