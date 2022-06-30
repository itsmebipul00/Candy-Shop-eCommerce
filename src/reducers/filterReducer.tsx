import {actionKind} from '../types/action/actionKind.type'
import {CategoryState} from '../types/data/categories.types'


type Action={
	type: actionKind,
	payload?: string,
	checked?: Boolean,
	feild: string,
	minPrice?: number,
	maxPrice?: number,
	initialState?: CategoryState
}


export const filterReducer = (state: CategoryState|undefined, action: Action) => {
	switch (action.type) {
		case actionKind.HandleSort:
			return {
				...state,
				[action.feild]: action.payload,
			}
		case actionKind.FilterCategories:
			return {
				...state,
				[action.feild]: action.checked,
			}
		case actionKind.FilterPrices:
			return {
				...state,
				minPriceVal: action.minPrice,
				maxPriceVal: action.maxPrice,
			}
		case actionKind.ResetFilters:
			return action.initialState
		default:
			return state
	}
}
