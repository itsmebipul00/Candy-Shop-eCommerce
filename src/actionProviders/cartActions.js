import { CartContext } from '../context'
import { useContext, useReducer } from 'react'
import { cartReducer } from '../reducers/cartReducer.js'
import axios from 'axios'

const CartProvider = props => {
	const [{ cartItems }, dispatch] = useReducer(cartReducer, {
		cartItems: [],
	})

	const config = {
		headers: {
			authorization: localStorage.getItem('userToken'),
		},
	}

	const updateCart = data => {
		dispatch({
			type: 'UPDATE_CART',
			payload: data,
		})
	}

	const errorInCart = data => {
		dispatch({
			type: 'CART_ERROR',
			payload: data,
		})
	}

	const addtoCartAction = async cartItem => {
		try {
			const res = await axios.post(
				'/api/user/cart',
				{ product: cartItem },
				config
			)
			const data = await res.data.cart

			updateCart(data)
		} catch (error) {
			errorInCart(error.message)
		}
	}

	const removeFromCartAction = async id => {
		try {
			const res = await axios.delete(`api/user/cart/${id}`, config)
			const data = await res.data.cart
			updateCart(data)
		} catch (error) {
			errorInCart(error.message)
		}
	}

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

	const updateCartAction = async (val, id, e) => {
		e.preventDefault()

		const cartItem = cartItems.find(item => item._id === id)

		if (val === 'decrement') {
			if (cartItem.qty === 1) {
				removeFromCartAction(id)
			} else {
				try {
					const res = await axios.post(
						`api/user/cart/${id}`,
						{ action: { type: val } },
						config
					)

					const data = await res.data.cart

					updateCart(data)
				} catch (error) {
					errorInCart(error.message)
				}
			}
		} else if (val === 'increment') {
			try {
				const res = await axios.post(
					`api/user/cart/${id}`,
					{ action: { type: val } },
					config
				)
				const data = await res.data.cart
				updateCart(data)
			} catch (error) {
				errorInCart(error.message)
			}
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
