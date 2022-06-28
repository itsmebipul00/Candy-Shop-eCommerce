import { CartContext } from '../../Context'
import { useContext, useReducer } from 'react'
import { cartReducer } from '../../reducers/cartReducer'

import cartService from '../../Services/cartServices.js'
import toast from 'react-hot-toast'

import { actionKind } from '../../types/action/actionKind.type'
import {  CartItem } from '../../types/data/cart.type'

const initialCartState = { cartItems: undefined }

type Action = {
	type: actionKind,
	payload?: CartItem[],
}

type State = {
	cartItems?: CartItem[],
}


const CartProvider = (props:React.PropsWithChildren<{}>) => {
	const [state, dispatch] = useReducer<React.Reducer<State, Action>>(
		cartReducer,
		initialCartState
	)

	const cartItems: CartItem[]|undefined= state?.cartItems

	const updateCart = (data: CartItem[]) => {
		dispatch({
			type: actionKind.UpdateCart,
			payload: data,
		})
	}

	const addtoCartAction = (cartItem: CartItem) =>{
		cartService
		.addToCart(cartItem)
		.then(data => updateCart(data.cart))
		toast.success(`${cartItem.title} is added to cart`)
	}
	

	const removeFromCartAction = (id: string) =>
		cartService.removeFromCart(id).then(data => updateCart(data.cart))

	const incrementCartAction = (id: string) =>
		cartService
			.increaseCartItem(id)
			.then(data => updateCart(data.cart))

	const decrementCartAction = (id: string) =>
		cartService
			.decreaseCartItem(id)
			.then(data => updateCart(data.cart))

	const clearCartAction = () => {
		dispatch({
			type: actionKind.ClearCart,
		})
	}

	const updateCartAction = async (val: string, id: string, e: React.MouseEvent<HTMLButtonElement, MouseEvent>, pathname?: string) => {
		if (pathname === '/products' || pathname === '/cart') {
			e.preventDefault()
		}
		const cartItem = cartItems?.find((item?:CartItem) => item?._id === id)

		if (cartItem && val === 'decrement') {
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
		} else if (cartItem && val === 'increment') {
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
				cartItems,
				updateCartAction,
			}}>
			{props.children}
		</CartContext.Provider>
	)
}

const useCart = () => useContext(CartContext)

export { useCart, CartProvider, initialCartState }
