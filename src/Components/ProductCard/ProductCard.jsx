import { Link } from 'react-router-dom'
import { Rating } from '../../Components/Rating/Rating.jsx'
import './ProductCard.css'

import { CartBtn } from '../CartBtn/CartBtn.js'

import { WishListBtn } from '../WishListBtn/WishListBtn'

import { useCart } from '../../actionProviders/cartActions.js'

export const ProductCard = props => {
	const { cartItems } = useCart()

	const cartItem =
		cartItems && cartItems.length > 0
			? cartItems.find(item => item._id === props._id)
			: false

	return (
		<div className=' product-card'>
			<Link
				to={`/product/${props._id}`}
				className='card d-grid grid-stacked'>
				<img
					src={props.image}
					alt='card__img'
					className='card__img'
				/>

				<CartBtn
					_id={props._id}
					addtocartHandler={props.addtocartHandler}
				/>
			</Link>
			<div className='card__content d-flex'>
				<div className=' f-col'>
					<h3 className='card__title'>{props.title}</h3>
					<p className='card__price'>
						Price:
						<span className='line-through text-dark-70 fw-200 original-price'>
							9999
						</span>
						$
						{cartItem && cartItem.qty
							? props.price * cartItem.qty
							: props.price}
					</p>
					<Rating value={props.rating} />
				</div>

				<WishListBtn
					_id={props._id}
					toggleWishListAction={props.toggleWishListAction}
					product={props.product}
				/>
			</div>
		</div>
	)
}
