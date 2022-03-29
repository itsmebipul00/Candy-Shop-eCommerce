import './CartScreen.css'
import { useContext } from 'react'
import { CartContext, WishListContext } from '../../context'
import { ProductCard } from '../../Components/ProductCard/ProductCard'

const CartScreen = () => {
	const { toggleWishListAction } = useContext(WishListContext)

	const { addtoCartAction, updateCartAction, cartItems } =
		useContext(CartContext)

	const updateCartHandler = (e, id) => {
		e.preventDefault()
		const { value } = e.target
		updateCartAction(value, id, e)
	}

	// const totalPrice = cartItems.map(item => item.)

	return (
		<div>
			<div className='wish-screen'>
				{cartItems &&
					cartItems.length > 0 &&
					cartItems.map(p => (
						<ProductCard
							key={p._id}
							_id={p._id}
							addtoCartAction={addtoCartAction}
							updateCartHandler={updateCartHandler}
							image={p.image}
							title={p.title}
							price={p.price}
							rating={p.rating}
							cartItems={cartItems}
							toggleWishListAction={toggleWishListAction}
						/>
					))}
			</div>
			<div className='cart-summary'>
				{cartItems.map(item => (
					<p>
						{item.title} --- Quantity: {item.qty} Price:{' '}
						{item.qty * item.price}
					</p>
				))}
				<>
					{cartItems.reduce(
						(prev, curr) => prev + curr.price * curr.qty,
						0
					)}
				</>
			</div>
		</div>
	)
}

export default CartScreen
