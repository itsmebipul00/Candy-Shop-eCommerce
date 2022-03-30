import { Link } from 'react-router-dom'
import { Rating } from '../../Components/Rating/Rating.jsx'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

export const ProductCard = props => {
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
				<button
					className='btn btn-addtocart uppercase'
					onClick={e => props.addtocartHandler(e, props._id)}>
					Add to cart
				</button>
			</Link>
			<div className='card__content d-flex'>
				<div className=' f-col'>
					<h3 className='card__title'>{props.title}</h3>
					<p className='card__price'>
						Price:
						<span className='line-through text-dark-70 fw-200 original-price'>
							9999
						</span>
						$ {props.price}
					</p>
					<Rating value={props.rating} />
				</div>
				<button
					onClick={() => props.toggleWishListAction(props)}
					className='btn-wishlist'>
					{props.wishList ? <AiFillHeart /> : <AiOutlineHeart />}
				</button>
			</div>
		</div>
	)
}
