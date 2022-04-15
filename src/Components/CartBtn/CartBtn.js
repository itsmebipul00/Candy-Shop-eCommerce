import { useLocation } from 'react-router-dom'

import { useCart } from '../../actionProviders/cartActions'

export const CartBtn = props => {
	const { cartItems, updateCartAction } = useCart()

	const location = useLocation()

	const iscartPage = location.pathname === '/cart' ? true : false

	const cartItem =
		cartItems && cartItems.length > 0
			? cartItems.find(item => item._id === props._id)
			: false

	console.log(cartItems, props._id)

	return (
		<>
			{iscartPage ? (
				<span className='btn btn-updateCart uppercase btn'>
					<button
						className='subBtn subBtn-addtocart'
						value='increment'
						onClick={e =>
							updateCartAction(
								e.target.value,
								props._id,
								e,
								location.pathname
							)
						}>
						+
					</button>

					<span>{cartItem.qty}</span>
					<button
						value='decrement'
						className='subBtn subBtn-removeFromCart'
						onClick={e =>
							updateCartAction(
								e.target.value,
								props._id,
								e,
								location.pathname
							)
						}>
						-
					</button>
				</span>
			) : cartItem && cartItem.qty > 0 ? (
				<span className='btn btn-updateCart uppercase btn'>
					<button
						className='subBtn subBtn-addtocart'
						value='increment'
						onClick={e =>
							updateCartAction(
								e.target.value,
								props._id,
								e,
								location.pathname
							)
						}>
						+
					</button>

					<span>{cartItem.qty}</span>
					<button
						value='decrement'
						className='subBtn subBtn-removeFromCart'
						onClick={e =>
							updateCartAction(
								e.target.value,
								props._id,
								e,
								location.pathname
							)
						}>
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
		</>
	)
}
