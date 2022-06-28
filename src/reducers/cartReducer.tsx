
import { actionKind } from '../types/action/actionKind.type'
import { CartItem } from '../types/data/cart.type'


type Action = {
	type: actionKind,
	payload?: CartItem[],
}

type State = {
	cartItems?: CartItem[],
}
export const cartReducer = (state: State = { cartItems: undefined }, action: Action) => {
	switch (action.type) {
		case actionKind.UpdateCart:
			return {
				cartItems: action.payload,
			}
		case actionKind.ClearCart:
			return {
				cartItems: undefined,
			}
		default:
			return state
	}
}
