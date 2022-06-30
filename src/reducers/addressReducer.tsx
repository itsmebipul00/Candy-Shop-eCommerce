import { actionKind } from '../types/action/actionKind.type'
import { Address } from '../types/data/address.type'

type Action = {
	type: actionKind,
	payload?: Address[],
}

type State = {
	address?: Address[],
}
export const addressReducer = (state: State = { address:undefined}, action: Action) => {
	switch (action.type) {
		case actionKind.UpdateAddress:
			return {
				address: action.payload,
			}
		case actionKind.ClearAddress:
			return {
				address: undefined,
			}
		default:
			return state
	}
}
