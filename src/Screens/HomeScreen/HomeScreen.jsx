// Componets: Search
import './HomeScreen.css'

import { useProducts } from '../../actionProviders/productActions'

import { useNavigate } from 'react-router-dom'

import {
	IcTwotoneArrowCircleLeft,
	IcTwotoneArrowCircleRight,
} from '../../assets/Icons/Logo'

import { useRef } from 'react'

const HomeScreen = () => {
	const navigate = useNavigate()

	const { categories, handleCategories, state } = useProducts()

	const gotoProducts = (name, checked) => {
		handleCategories(name, checked)
		setTimeout(() => navigate('/products'), 500)
	}

	const sliderBtn = useRef(null)

	const scroll = scrollOffset => {
		sliderBtn.current.scrollLeft += scrollOffset
	}

	return (
		<div className='homescreen'>
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
						categories.map(cat => (
							<label
								className='categories uppercase fs-400 text-red text-underline letter-spacing-3'
								for={cat.categoryName}>
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

export default HomeScreen
