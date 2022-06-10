import './CartScreen.css'

import { ProductCard } from '../../Components/ProductCard/ProductCard'

import { useWishList } from '../../actionProviders/wishListAction'

import { useCart } from '../../actionProviders/cartActions'
import { useNavigate, useLocation } from 'react-router-dom'

// import { useState } from 'react'

const CartScreen = () => {
	const navigate = useNavigate()

	const location = useLocation()

	const { toggleWishListAction, wishList } = useWishList()

	const { addtoCartAction, cartItems, removeFromCartAction } =
		useCart()

	const totalItems =
		cartItems && cartItems.length > 0
			? cartItems.reduce((sum, cv) => sum + cv.qty, 0)
			: 0

	const totalPrice =
		cartItems && cartItems.length > 0
			? cartItems.reduce((sum, cv) => sum + cv.price * cv.qty, 0)
			: 0

	const updateWishList = pro => {
		removeFromCartAction(pro._id)
		toggleWishListAction(pro)
	}

	const disabledBtn = cartItems.length < 1 ? true : false

	return (
		<section>
			<div className='wish-screen'>
				{cartItems &&
					cartItems.length > 0 &&
					cartItems.map(p => (
						<ProductCard
							product={p}
							key={p._id}
							_id={p._id}
							addtoCartAction={addtoCartAction}
							image={p.image}
							title={p.title}
							price={p.price}
							rating={p.rating}
							cartItems={cartItems}
							wishList={wishList}
							toggleWishListAction={updateWishList}
						/>
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
		</section>
	)
}

export default CartScreen
