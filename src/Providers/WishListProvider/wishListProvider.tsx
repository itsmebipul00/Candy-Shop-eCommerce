import { wishListReducer } from '../../reducers/wishListReducer'
import React, { useReducer, useContext } from 'react'

import { WishListContext } from '../../Context'

import {actionKind} from '../../types/action/actionKind.type'
import {WishItem} from '../../types/data/wishList.type'

import toast from 'react-hot-toast'

import wishServices from '../../Services/wishServices.js'

const initialWishListState = {wishList: undefined}

type State={
	wishList?: WishItem[]
}

type Action={
	type: actionKind
	payload?: WishItem[]
}



const WishListProvider = (props:React.PropsWithChildren<{}>) => {
	const [state, dispatch] = useReducer<React.Reducer<State, Action>>(wishListReducer, initialWishListState)

	const wishList:WishItem[]|undefined=  state?.wishList

	const updateWishList = (data: WishItem[]) => {
		dispatch({
			type: actionKind.UpdateWishList,
			payload: data,
		})
	}

	const clearWishListAction = () => {
		dispatch({
			type: actionKind.ClearWishList,
		})
	}

	const removeFromWishAction = (id: string) =>
		wishServices
			.removeFromWishList(id)
			.then(data => updateWishList(data.wishlist))

	const addToWishAction = (product: WishItem) =>
		wishServices
			.addToWishList(product)
			.then(data => updateWishList(data.wishlist))

	const toggleWishListAction = async (product: WishItem) => {
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

export { useWishList, WishListProvider, initialWishListState }
