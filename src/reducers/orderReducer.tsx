import { actionKind } from '../types/action/actionKind.type'
import {  Order } from '../types/data/orders.type'

type Action = {
	type: actionKind,
	payload?: Order[],
}

type State = {
	orders?: Order[],
}
export const orderReducer = (state : State= { orders: undefined }, action: Action) => {
	switch (action.type) {
		case actionKind.UpdateOrder:
			return {
				orders: action.payload,
			}
		case actionKind.ClearOrders:
			return {
				orders: undefined,
			}
		default:
			return state
	}
}
