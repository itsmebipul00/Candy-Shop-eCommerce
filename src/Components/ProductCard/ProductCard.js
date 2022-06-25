import { Link } from 'react-router-dom'
import { Rating } from '../Rating/Rating'
import './ProductCard.css'

import { CartBtn } from '../CartBtn/CartBtn'

import { WishListBtn } from '../WishListBtn/WishListBtn'

import { useLocation } from 'react-router-dom'

import { useCart } from '../../Providers'

export const ProductCard = props => {
	const { cartItems } = useCart()

	const location = useLocation()

	const isCartPage = location.pathname === '/cart'

	const cartItem =
		cartItems && cartItems.length > 0
			? cartItems.find(item => item._id === props.product._id)
			: false

	return (
		<div className=' product-card'>
			<Link
				to={`/product/${props.product._id}`}
				className='card d-grid grid-stacked'>
				<img
					src={props.product.image}
					alt='card__img'
					className='card__img'
				/>

				<CartBtn product={props.product} />
			</Link>

			<div className='card__content d-flex'>
				<div className=' f-col'>
					<h3 className='card__title'>{props.product.title}</h3>
					<Rating value={props.product.rating} />

					<p className='card__price'>
						Price:
						<span className='line-through text-dark-70 fw-200 original-price'>
							9999
						</span>
						$
						{isCartPage
							? `${props.product.price * cartItem.qty}`
							: props.product.price}
					</p>
				</div>

				<WishListBtn product={props.product} />
			</div>
		</div>
	)
}
