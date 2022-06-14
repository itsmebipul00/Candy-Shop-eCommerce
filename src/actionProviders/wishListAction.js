import { wishListReducer } from '../reducers/wishListReducer'
import { useReducer, useContext } from 'react'

import { WishListContext } from '../context'

import toast from 'react-hot-toast'

import wishServices from '../Services/wishServices'

const WishListProvider = props => {
	const [{ wishList }, dispatch] = useReducer(wishListReducer, {
		wishList: [],
	})

	const updateWishList = data => {
		dispatch({
			type: 'UPDATE_WISHLIST',
			payload: data,
		})
	}

	const clearWishListAction = () => {
		dispatch({
			type: 'CLEAR_WISHLIST',
		})
	}

	const removeFromWishAction = id =>
		wishServices
			.removeFromWishList(id)
			.then(data => updateWishList(data.wishlist))

	const addToWishAction = product =>
		wishServices
			.addToWishList(product)
			.then(data => updateWishList(data.wishlist))

	const toggleWishListAction = async product => {
		const itemExists =
			wishList &&
			wishList.length > 0 &&
			wishList.find(x => x._id === product._id)

		if (itemExists) {
			removeFromWishAction(product._id)
			toast.success(`${product.title} is removed from wishlist`)
		} else {
			addToWishAction(product)
			toast.success(`${product.title} is added to wishlist`)
		}
	}

	return (
		<WishListContext.Provider
			value={{
				toggleWishListAction,
				clearWishListAction,
				wishList,
			}}>
			{props.children}
		</WishListContext.Provider>
	)
}

const useWishList = () => useContext(WishListContext)

export { useWishList, WishListProvider }
