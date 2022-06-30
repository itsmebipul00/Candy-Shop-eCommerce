import {actionKind} from '../types/action/actionKind.type'
import {WishItem} from '../types/data/wishList.type'


type State={
	wishList?: WishItem[]
}

type Action={
	type: actionKind
	payload?: WishItem[]
}



export const wishListReducer = (state:State = { wishList: undefined }, action: Action) => {
	switch (action.type) {
		case actionKind.UpdateWishList:
			return {
				wishList: action.payload,
			}
		case actionKind.ClearWishList:
			return {
				wishList: undefined,
			}
		default:
			return state
	}
}
