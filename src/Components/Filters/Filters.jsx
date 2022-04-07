import './Filters.css'
import { useProducts } from '../../actionProviders/productActions'

export const Filters = () => {
	const { handleSorting, handleCategories, resetFilters, state } =
		useProducts()

	const issStateEmpty =
		Object.keys(state).filter(k => state[k]).length > 0 ? false : true

	return (
		<div className='filter-products'>
			{!issStateEmpty && (
				<button
					className='btn btn-clear-filters fs-300 letter-spacing-5 uppercase'
					onClick={resetFilters}>
					Clear
				</button>
			)}
			<button className='btn btn-apply-filters fs-300 letter-spacing-5 uppercase'>
				Filters
			</button>

			{/* MAP THE STATE CATEGORIES HERE IF YOU GET TIME-- NO NEED TO HARDCODE */}
			<ul className='filters  d-flex'>
				<li className='filter-by-categories f-col' role='list'>
					<h2 className='fs-400'>Categories</h2>

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
							<h2 className='fs-400'>Rating</h2>
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
				</li>

				<li className='sort-by' role='list'>
					<fieldset className='sort-by-price f-col'>
						<legend>
							<h2 className='fs-400'>Price</h2>
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
					<h2 className='fs-400 price-range-title'>Price Range:</h2>
					{/* 2 thumbs Will work later */}
					{/* <label htmlFor="price-range" className='d-grid grid-stacked'>
                    <input type="range" className="price-slider-1" id='price-range' min="0" max="100" step="1"/>
                    <input type="range" className="price-slider-2"  id='price-range' min="0" max="100" step="1"/>
                  </label> */}
				</li>
			</ul>
		</div>
	)
}
