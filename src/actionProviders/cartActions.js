import { UserContext, CartContext } from '../context'
import { useContext, useReducer } from 'react'
import { cartReducer } from '../reducers/cartReducer.js'
import axios from 'axios'

export const CartProvider = props => {
	const [{ cartItems }, dispatch] = useReducer(cartReducer, {
		cartItems: [],
	})
	const { userInfo } = useContext(UserContext)

	const config = {
		headers: {
			authorization: userInfo.encodedToken,
		},
	}

	console.log(userInfo)

	const addtoCartAction = async cartItem => {
		try {
			const res = await axios.post(
				'/api/user/cart',
				{ product: cartItem },
				config
			)
			const data = await res.data
			dispatch({
				type: 'ADD_TO_CART',
				payload: data.cart,
			})
		} catch (error) {
			dispatch({
				type: 'ADD_TO_CART_ERROR',
				payload: error.message,
			})
		}
	}

	const removeFromCartAction = async id => {
		try {
			const res = await axios.delete(`api/user/cart/${id}`, config)
			const data = await res.data
			dispatch({
				type: 'REMOVE_FROM_CART',
				payload: data.cart,
			})
		} catch (error) {
			dispatch({
				type: 'REMOVE_FROM_CART_ERROR',
				payload: error.message,
			})
		}
	}

	const clearCartAction = () => {
		dispatch({
			type: 'CLEAR_CART',
		})
	}

	const getCartItemsAction = () => {
		dispatch({
			type: 'GET_CART_ITEMS',
		})
	}

	const updateCartAction = async (val, id, e) => {
		e.preventDefault()
		console.log(val, id)
		const cartItem = cartItems.find(item => item._id === id)
		if (val === 'decrement') {
			console.log(cartItem)
			if (cartItem.qty === 1) {
				removeFromCartAction(id)
			} else {
				try {
					const res = await axios.post(
						`api/user/cart/${id}`,
						{ action: { type: val } },
						config
					)
					const data = await res.data
					dispatch({
						type: 'UPDATE_CART_ITEM',
						payload: data.cart,
					})
				} catch (error) {
					dispatch({
						type: 'UPDATE_CART_ERROR',
						payload: error.message,
					})
				}
			}
		} else if (val === 'increment') {
			try {
				const res = await axios.post(
					`api/user/cart/${id}`,
					{ action: { type: val } },
					config
				)
				const data = await res.data
				dispatch({
					type: 'UPDATE_CART_ITEM',
					payload: data.cart,
				})
			} catch (error) {
				dispatch({
					type: 'UPDATE_CART_ERROR',
					payload: error.message,
				})
			}
		}
	}

	// console.log(cartItems)

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
