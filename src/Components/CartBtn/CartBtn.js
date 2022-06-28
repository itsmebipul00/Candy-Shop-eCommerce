import { useLocation } from 'react-router-dom'
import { useNavigate, useParams } from 'react-router-dom'

import { useWishList, useCart, useUser } from '../../Providers'

export const CartBtn = props => {
	const { cartItems, updateCartAction, addtoCartAction } = useCart()

	const { userInfo } = useUser()

	const { id } = useParams()

	const location = useLocation()

	const navigate = useNavigate()

	const { wishList, toggleWishListAction } = useWishList()

	const iscartPage = location.pathname === '/cart' ? true : false

	const isproductPage =
		location.pathname === `/product/${id}` ? true : false

	const cartItem =
		cartItems && cartItems.length > 0
			? cartItems.find(item => item._id === props.product._id)
			: false

	const addtocartHandler = (e, product) => {
		e.preventDefault()
		if (!userInfo.encodedToken) {
			navigate('/login')
			return
		}
		const cartInWish = wishList?.find(pro => pro._id === product._id)

		if (Boolean(cartInWish)) {
			toggleWishListAction(cartInWish)
		}

		addtoCartAction(product)
	}

	return (
		<>
			{iscartPage ? (
				<span className={`btn btn-updateCart uppercase `}>
					<button
						value='decrement'
						className='subBtn subBtn-removeFromCart'
						onClick={e =>
							updateCartAction(
								e.target.value,
								props.product._id,
								e,
								location.pathname
							)
						}>
						-
					</button>

					<span>{cartItem.qty}</span>
					<button
						className='subBtn subBtn-addtocart'
						value='increment'
						onClick={e =>
							updateCartAction(
								e.target.value,
								props.product._id,
								e,
								location.pathname
							)
						}>
						+
					</button>
				</span>
			) : cartItem?.qty > 0 && isproductPage ? (
				<button
					className='btn btn-addtocart uppercase letter-spacing-5 fs-400'
					onClick={() => navigate('/cart')}>
					{' '}
					Already In Cart
				</button>
			) : cartItem?.qty > 0 ? (
				<span
					className={`btn btn-updateCart uppercase ${props.className}`}>
					<button
						value='decrement'
						className='subBtn subBtn-removeFromCart'
						onClick={e =>
							updateCartAction(
								e.target.value,
								props.product._id,
								e,
								location.pathname
							)
						}>
						-
					</button>

					<span>{cartItem.qty}</span>
					<button
						className='subBtn subBtn-addtocart'
						value='increment'
						onClick={e =>
							updateCartAction(
								e.target.value,
								props.product._id,
								e,
								location.pathname
							)
						}>
						+
					</button>
				</span>
			) : (
				<button
					className='btn btn-addtocart uppercase letter-spacing-5 fs-400'
					onClick={e => addtocartHandler(e, props.product)}>
					Add to cart
				</button>
			)}
		</>
	)
}
