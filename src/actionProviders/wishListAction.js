import { wishListReducer } from '../reducers/wishListReducer'
import { useReducer, useContext } from 'react'
import { UserContext } from '../context'

import { WishListContext } from '../context'

import axios from 'axios'

export const WishListProvider = props => {
	const [{ wishList }, dispatch] = useReducer(wishListReducer, {
		wishList: [],
	})
	const { userInfo } = useContext(UserContext)

	const config = {
		headers: {
			authorization: userInfo.encodedToken,
		},
	}

	const updateWishList = data => {
		dispatch({
			type: 'UPDATE_WISHLIST',
			payload: data,
		})
	}

	const wishListError = data => {
		dispatch({
			type: 'WISHLIST_ERROR',
			payload: data,
		})
	}

	const toggleWishListAction = async product => {
		const itemExists =
			wishList.findIndex(x => x._id === product._id) === -1
				? false
				: true

		if (itemExists) {
			try {
				const res = await axios.delete(
					`/api/user/wishlist/${product._id}`,
					config
				)
				const data = await res.data.wishlist
				updateWishList(data)
				// localStorage to setWishlist
			} catch (error) {
				wishListError(error.message)
				// toast Invalid request error
			}
		} else {
			try {
				const res = await axios.post(
					`/api/user/wishlist`,
					{ product: product },
					config
				)
				const data = await res.data.wishlist
				updateWishList(data)
			} catch (error) {
				wishListError(error.message)
				// Invalid request toast
			}
		}
	}

	const clearWishListAction = () => {
		dispatch({
			type: 'CLEAR_WISHLIST',
		})
	}

	const getWishListAction = async () => {
		try {
			const res = await axios.get('/api/user/wishlist', config)
			const data = await res.data.wishlist
			updateWishList(data)
		} catch (error) {
			wishListError(error.message)
		}
	}

	return (
		<WishListContext.Provider
			value={{
				toggleWishListAction,
				clearWishListAction,
				getWishListAction,
				wishList,
			}}>
			{props.children}
		</WishListContext.Provider>
	)
}
