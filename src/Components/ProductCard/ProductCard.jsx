import { Link } from 'react-router-dom'
import { Rating } from '../../Components/Rating/Rating.jsx'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import './ProductCard.css'
import { useLocation } from 'react-router-dom'

export const ProductCard = props => {
	const location = useLocation()

	const iscartPage = location.pathname === '/cart' ? true : false

	const cartItem =
		props.cartItems && props.cartItems.length > 0
			? props.cartItems.find(item => item._id === props._id)
			: false

	const isInWishList =
		props.wishList && props.wishList.length > 0
			? props.wishList.find(item => item._id === props._id)
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

				{iscartPage ? (
					<span className='btn btn-updateCart uppercase btn'>
						<button
							className='subBtn subBtn-addtocart'
							value='increment'
							onClick={e => props.updateCartHandler(e, props._id)}>
							+
						</button>

						<span>{cartItem.qty}</span>
						<button
							value='decrement'
							className='subBtn subBtn-removeFromCart'
							onClick={e => props.updateCartHandler(e, props._id)}>
							-
						</button>
					</span>
				) : cartItem && cartItem.qty > 0 ? (
					<span className='btn btn-updateCart uppercase btn'>
						<button
							className='subBtn subBtn-addtocart'
							value='increment'
							onClick={e => props.updateCartHandler(e, props._id)}>
							+
						</button>

						<span>{cartItem.qty}</span>
						<button
							value='decrement'
							className='subBtn subBtn-removeFromCart'
							onClick={e => props.updateCartHandler(e, props._id)}>
							-
						</button>
					</span>
				) : (
					<button
						className='btn btn-addtocart uppercase letter-spacing-5 fs-400'
						onClick={e => props.addtocartHandler(e, props._id)}>
						Add to cart
					</button>
				)}
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
				<button
					onClick={() => props.toggleWishListAction(props)}
					className='btn-wishlist'>
					{isInWishList ? <AiFillHeart /> : <AiOutlineHeart />}
				</button>
			</div>
		</div>
	)
}
