import './CartScreen.css'

import { ProductCard, EmptyBasket } from '../../Components'

import { useCart } from '../../Providers'
import { useNavigate, useLocation } from 'react-router-dom'

const CartScreen = () => {
	const navigate = useNavigate()

	const location = useLocation()

	const { cartItems } = useCart()

	const totalItems =
		cartItems && cartItems.length > 0
			? cartItems.reduce((sum, cv) => sum + cv.qty, 0)
			: 0

	const totalPrice =
		cartItems && cartItems.length > 0
			? cartItems.reduce((sum, cv) => sum + cv.price * cv.qty, 0)
			: 0

	const disabledBtn = cartItems?.length < 1 ? true : false

	return (
		<section className='cart-page'>
			{cartItems && cartItems.length > 0 ? (
				<>
					<div className='wish-screen'>
						{cartItems.map((p, idx) => (
							<ProductCard product={p} key={idx} />
						))}
					</div>
					<div className='cart-summary'>
						<p className='subtotal fs-600 '>
							SUBTOTAL({totalItems}) Items: ${totalPrice}
						</p>

						<button
							disabled={disabledBtn}
							onClick={() =>
								navigate('/address', {
									state: { from: location.pathname },
								})
							}
							className='checkout-price'>
							Checkout{' '}
						</button>
					</div>
				</>
			) : (
				<EmptyBasket basket='cart' />
			)}
		</section>
	)
}

export default CartScreen
