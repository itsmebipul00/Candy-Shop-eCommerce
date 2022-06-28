import React from 'react'
import { Link } from 'react-router-dom'
import { useCarousal } from '../../Hooks/useCarousal'

export const Carousal:React.FC = () => {
	const carousal:number = useCarousal()

	return (
		<div className='carousal-wrapper grid grid-stacked'>
			<img
				src={`${window.location.origin}/images/Carousel/carousel-image-${carousal}.jpg`}
				alt={`carousel--${carousal}`}
				className='carousal-image'
			/>
			<Link
				to='/products'
				className='btn btn-hero uppercase uppercase letter-spacing-2 fs-500'>
				Shop Now
			</Link>
		</div>
	)
}
