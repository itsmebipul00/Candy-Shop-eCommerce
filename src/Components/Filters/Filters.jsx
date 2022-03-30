import './Filters.css'
import { useContext } from 'react'
import { ProductsContext } from '../../context'

export const Filters = () => {
	const { handleFilters, filterData, resetFilters } =
		useContext(ProductsContext)

	const isFilterDataEmpty =
		Object.keys(filterData).filter(k => filterData[k]).length > 0
			? false
			: true

	return (
		<div className='filter-products'>
			{!isFilterDataEmpty && (
				<button
					className='btn btn-clear-filters fs-300 letter-spacing-5 uppercase'
					onClick={resetFilters}>
					Clear
				</button>
			)}
			<button className='btn btn-apply-filters fs-300 letter-spacing-5 uppercase'>
				Filters
			</button>

			<ul className='filters  d-flex'>
				<li className='filter-by-categories f-col' role='list'>
					<h2 className='fs-400'>Categories</h2>

					<label htmlFor='marshmello'>
						<input
							type='checkbox'
							id='marshmello'
							className='checkbox'
							name='marshmello'
							checked={filterData.marshmello}
							onChange={handleFilters}
						/>
						<span className='text'>Marshmello</span>
					</label>

					<label htmlFor='chocolates'>
						<input
							type='checkbox'
							id='chocolates'
							className='checkbox'
							name='chocolates'
							checked={filterData.chocolates}
							onChange={handleFilters}
						/>
						<span className='text'>Chocolates</span>
					</label>

					<label htmlFor='darkChocolate'>
						<input
							type='checkbox'
							id='darkChocolate'
							className='checkbox'
							name='darkChocolate'
							checked={filterData.darkChocolate}
							onChange={handleFilters}
						/>
						<span className='text'>Dark Chocolates</span>
					</label>

					<label htmlFor='fizzy'>
						<input
							type='checkbox'
							id='fizzy'
							className='checkbox'
							name='fizzy'
							checked={filterData.fizzy}
							onChange={handleFilters}
						/>
						<span className='text'>Fizzy</span>
					</label>

					<label htmlFor='gummies'>
						<input
							type='checkbox'
							id='gummies'
							className='checkbox'
							name='gummies'
							checked={filterData.gummies}
							onChange={handleFilters}
						/>
						<span className='text'>Gummies</span>
					</label>

					<label htmlFor='jellies'>
						<input
							type='checkbox'
							id='jellies'
							className='checkbox'
							name='jellies'
							checked={filterData.jellies}
							onChange={handleFilters}
						/>
						<span className='text'>Jellies</span>
					</label>

					<label htmlFor='lollipop'>
						<input
							type='checkbox'
							id='lollipop'
							className='checkbox'
							name='lollipop'
							checked={filterData.lollipop}
							onChange={handleFilters}
						/>
						<span className='text'>Lollipops</span>
					</label>

					<label htmlFor='rasberry'>
						<input
							type='checkbox'
							id='rasberry'
							className='checkbox'
							name='rasberry'
							checked={filterData.rasberry}
							onChange={handleFilters}
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
								checked={filterData.sort === 'rating-high-to-low'}
								onChange={handleFilters}
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
								checked={filterData.sort === 'rating-low-to-high'}
								onChange={handleFilters}
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
								checked={filterData.sort === 'price-high-to-low'}
								onChange={handleFilters}
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
								checked={filterData.sort === 'price-low-to-high'}
								onChange={handleFilters}
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
