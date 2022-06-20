import { useScroll } from '../../Hooks/useScroll'

import {
	IcTwotoneArrowCircleLeft,
	IcTwotoneArrowCircleRight,
} from '../../Assets/Logo'

import { useProducts } from '../../Providers'

import { useNavigate } from 'react-router-dom'

export const CategoriesScroll = () => {
	const navigate = useNavigate()

	const [sliderBtn, scroll] = useScroll()

	const { categories, handleCategories, state } = useProducts()

	const gotoProducts = (name, checked) => {
		handleCategories(name, checked)
		setTimeout(() => navigate('/products'), 500)
	}
	return (
		<div>
			<div className='cat-headiing-wrapper'>
				<h2 className='categories-heading fs-700 letter-spacing-3 uppercase'>
					Categories
				</h2>
			</div>
			<div className='categories'>
				<button
					onClick={() => scroll(-900)}
					className='scroll-btn left-scroll-btn'>
					<IcTwotoneArrowCircleLeft
						className='left-scroll-icon'
						width='4rem'
						height='4rem'
					/>
				</button>

				<div className='category-wrapper' ref={sliderBtn}>
					{categories &&
						categories.length > 0 &&
						categories.map((cat, idx) => (
							<label
								className='categories uppercase fs-400 text-red text-underline letter-spacing-3'
								for={cat.categoryName}
								key={idx}>
								{cat.categoryName}
								<input
									id={cat.categoryName}
									type='image'
									className='homepage-images'
									src={cat.image}
									alt={cat.categoryName}
									name={cat.categoryName}
									checked={!state.name}
									readOnly
									onClick={e =>
										gotoProducts(e.target.name, e.target.checked)
									}
								/>
							</label>
						))}
				</div>
				<button
					onClick={() => scroll(+900)}
					className='scroll-btn right-scroll-btn'>
					<IcTwotoneArrowCircleRight
						className='right-scroll-icon'
						width='4rem'
						height='4rem'
					/>
				</button>
			</div>
		</div>
	)
}

export default CategoriesScroll
