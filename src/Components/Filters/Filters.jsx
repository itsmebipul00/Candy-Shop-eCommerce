import './Filters.css'
import { useProducts } from '../../actionProviders/productActions'

import { useRef } from 'react'

export const Filters = () => {
	const {
		handleSorting,
		handleCategories,
		resetFilters,
		state,
		handlePriceChange,
		maxPriceVal,
		minPriceVal,
	} = useProducts()

	const issStateEmpty =
		Object.keys(state).filter(k => state[k]).length > 0 ? false : true

	const minPriceRef = useRef()
	const maxPriceRef = useRef()
	const progressBarRef = useRef()

	const handlePriceRange = () => {
		const minP = minPriceRef.current.value
		const maxP = maxPriceRef.current.value

		progressBarRef.current.style.left =
			(minP / maxPriceVal) * 100 + '%'
		progressBarRef.current.style.right =
			(maxP / minPriceVal) * 100 + '%'

		handlePriceChange(minP, maxP)
	}

	return (
		<div className='filter-products'>
			<button className='btn btn-apply-filters fs-300 letter-spacing-5 uppercase'>
				Filters
			</button>

			<ul className='filters d-flex p-relative fs-400'>
				<li className='filter-by-categories f-col' role='list'>
					<h2 className='filter-heading'>Categories</h2>

					<label htmlFor='marshmello'>
						<input
							type='checkbox'
							id='marshmello'
							className='checkbox'
							name='marshmello'
							checked={state.marshmello}
							onChange={e =>
								handleCategories(e.target.name, e.target.checked)
							}
						/>
						<span className='text'>Marshmello</span>
					</label>

					<label htmlFor='chocolates'>
						<input
							type='checkbox'
							id='chocolates'
							className='checkbox'
							name='chocolates'
							checked={state.chocolates}
							onChange={e =>
								handleCategories(e.target.name, e.target.checked)
							}
						/>
						<span className='text'>Chocolates</span>
					</label>

					<label htmlFor='darkChocolate'>
						<input
							type='checkbox'
							id='darkChocolate'
							className='checkbox'
							name='darkChocolate'
							checked={state.darkChocolate}
							onChange={e =>
								handleCategories(e.target.name, e.target.checked)
							}
						/>
						<span className='text'>Dark Chocolates</span>
					</label>

					<label htmlFor='fizzy'>
						<input
							type='checkbox'
							id='fizzy'
							className='checkbox'
							name='fizzy'
							checked={state.fizzy}
							onChange={e =>
								handleCategories(e.target.name, e.target.checked)
							}
						/>
						<span className='text'>Fizzy</span>
					</label>

					<label htmlFor='gummies'>
						<input
							type='checkbox'
							id='gummies'
							className='checkbox'
							name='gummies'
							checked={state.gummies}
							onChange={e =>
								handleCategories(e.target.name, e.target.checked)
							}
						/>
						<span className='text'>Gummies</span>
					</label>

					<label htmlFor='jellies'>
						<input
							type='checkbox'
							id='jellies'
							className='checkbox'
							name='jellies'
							checked={state.jellies}
							onChange={e =>
								handleCategories(e.target.name, e.target.checked)
							}
						/>
						<span className='text'>Jellies</span>
					</label>

					<label htmlFor='lollipop'>
						<input
							type='checkbox'
							id='lollipop'
							className='checkbox'
							name='lollipop'
							checked={state.lollipop}
							onChange={e =>
								handleCategories(e.target.name, e.target.checked)
							}
						/>
						<span className='text'>Lollipops</span>
					</label>

					<label htmlFor='rasberry'>
						<input
							type='checkbox'
							id='rasberry'
							className='checkbox'
							name='rasberry'
							checked={state.rasberry}
							onChange={e =>
								handleCategories(e.target.name, e.target.checked)
							}
						/>
						<span className='text'>Rasberry</span>
					</label>
				</li>

				<li className='sort-by' role='list'>
					<fieldset className='sort-by-price f-col'>
						<legend>
							<h2 className='filter-heading'>Rating</h2>
						</legend>
						<label htmlFor='rating-high-to-low'>
							<input
								type='radio'
								id='rating-high-to-low'
								value='rating-high-to-low'
								className='radio'
								name='sort'
								checked={state.sort === 'rating-high-to-low'}
								onChange={e =>
									handleSorting(e.target.name, e.target.value)
								}
							/>
							<span className='text'>High to Low</span>
						</label>

						<label htmlFor='rating-low-to-high'>
							<input
								type='radio'
								id='rating-low-to-high'
								value='rating-low-to-high'
								className='radio'
								name='sort'
								checked={state.sort === 'rating-low-to-high'}
								onChange={e =>
									handleSorting(e.target.name, e.target.value)
								}
							/>
							<span className='text'>Low to High</span>
						</label>
					</fieldset>

					<fieldset className='sort-by-price f-col'>
						<legend>
							<h2 className='filter-heading'>Price</h2>
						</legend>

						<label htmlFor='price-high-to-low'>
							<input
								type='radio'
								id='price-high-to-low'
								value='price-high-to-low'
								name='sort'
								className='radio'
								checked={state.sort === 'price-high-to-low'}
								onChange={e =>
									handleSorting(e.target.name, e.target.value)
								}
							/>
							<span className='text'>High to Low</span>
						</label>

						<label htmlFor='price-low-to-high'>
							<input
								type='radio'
								id='price-low-to-high'
								name='sort'
								value='price-low-to-high'
								className='radio'
								checked={state.sort === 'price-low-to-high'}
								onChange={e =>
									handleSorting(e.target.name, e.target.value)
								}
							/>
							<span className='text'>Low to High</span>
						</label>
					</fieldset>
				</li>

				<li className='price-range p-relative'>
					<h2 className='filter-heading price-range-title'>
						Price Range:
					</h2>
					<div className='slider-input'>
						<span value='0'>{state.minPriceVal}</span>-
						<span value='99999'>{state.maxPriceVal}</span>
					</div>

					<div className='slider-range'>
						<div className='progress' ref={progressBarRef}></div>
						<input
							type='range'
							name='range-min'
							id='range-min'
							className='range-min'
							min='0'
							max='500'
							value={state.minPriceVal}
							step='1'
							ref={minPriceRef}
							onInput={handlePriceRange}
						/>
						<input
							type='range'
							name='range-max'
							id='range-max'
							className='range-max'
							min='0'
							max='500'
							value={state.maxPriceVal}
							step='1'
							ref={maxPriceRef}
							onInput={handlePriceRange}
						/>
					</div>
				</li>
				{!issStateEmpty && (
					<button
						className='btn btn-clear-filters fs-300 letter-spacing-5 uppercase p-absolute'
						onClick={resetFilters}>
						Clear filters
					</button>
				)}
			</ul>
		</div>
	)
}
