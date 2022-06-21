import { CartContext } from '../../Context'
import { useContext, useReducer } from 'react'
import { cartReducer } from '../../reducers/cartReducer'
import toast from 'react-hot-toast'

import cartService from '../../Services/cartServices'

const CartProvider = props => {
	const [{ cartItems }, dispatch] = useReducer(cartReducer, {
		cartItems: [],
	})

	const updateCart = data => {
		dispatch({
			type: 'UPDATE_CART',
			payload: data,
		})
	}

	const addtoCartAction = cartItem =>
		cartService
			.addToCart(cartItem)
			.then(data => updateCart(data.cart))
			.then(toast.success(`${cartItem.title} is added to cart`))

	const removeFromCartAction = id =>
		cartService.removeFromCart(id).then(data => updateCart(data.cart))

	const incrementCartAction = id =>
		cartService
			.increaseCartItem(id)
			.then(data => updateCart(data.cart))

	const decrementCartAction = id =>
		cartService
			.decreaseCartItem(id)
			.then(data => updateCart(data.cart))

	const clearCartAction = () => {
		dispatch({
			type: 'CLEAR_CART',
		})
	}

	const getCartItemsAction = () => {
		dispatch({
			type: 'UPDATE_CART',
		})
	}

	const updateCartAction = async (val, id, e, pathname) => {
		if (pathname === '/products' || pathname === '/cart') {
			e.preventDefault()
		}
		const cartItem = cartItems.find(item => item._id === id)

		if (val === 'decrement') {
			if (cartItem.qty === 1) {
				removeFromCartAction(id)

				toast.success(`${cartItem.title} is removed from cart`)
			} else {
				decrementCartAction(id)

				toast.success(
					`${cartItem.title}'s quantity is decreased to ${
						cartItem.qty - 1
					}`
				)
			}
		} else if (val === 'increment') {
			incrementCartAction(id)

			toast.success(
				`${cartItem.title}'s quantity is increased to ${
					cartItem.qty + 1
				}`
			)
		}
	}

	return (
		<CartContext.Provider
			value={{
				addtoCartAction,
				removeFromCartAction,
				clearCartAction,
				getCartItemsAction,
				cartItems,
				updateCartAction,
			}}>
			{props.children}
		</CartContext.Provider>
	)
}

const useCart = () => useContext(CartContext)

export { useCart, CartProvider }
