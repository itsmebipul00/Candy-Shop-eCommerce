// Componets: Search
import './HomeScreen.css'

import { useProducts } from '../../actionProviders/productActions'

import { useNavigate } from 'react-router-dom'

import {
	IcTwotoneArrowCircleLeft,
	IcTwotoneArrowCircleRight,
} from '../../assets/Icons/Logo'

import { useRef } from 'react'
import { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'

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

	const origin = window.location.origin

	const [carousal, setCarousal] = useState(1)

	useEffect(() => {
		const timerId = setInterval(
			() => setCarousal(prev => (prev === 5 ? 1 : prev + 1)),
			2000
		)
		return () => clearInterval(timerId)
	}, [])

	return (
		<section>
			<div className='cat-headiing-wrapper'>
				<h2 className='categories-heading fs-800 letter-spacing-3 uppercase'>
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
			<div className='carousal-wrapper grid grid-stacked'>
				<img
					src={`${origin}/images/Carousel/carousel-image-${carousal}.jpg`}
					alt={`carousel--${carousal}`}
					className='carousal-image'
				/>
				<Link
					to='/products'
					className='btn btn-hero uppercase uppercase letter-spacing-2 fs-800'>
					Shop Now
				</Link>
			</div>
		</section>
	)
}

export default HomeScreen
