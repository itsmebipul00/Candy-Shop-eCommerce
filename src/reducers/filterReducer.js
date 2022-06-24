export const filterReducer = (state, action) => {
	console.log(action)
	switch (action.type) {
		case 'HANDLE_SORT':
			return {
				...state,
				[action.feild]: action.payload,
			}
		case 'FILTER_CATEGORIES':
			return {
				...state,
				[action.feild]: action.payload,
			}
		case 'FILTER_PRICES':
			return {
				...state,
				minPriceVal: action.minPrice,
				maxPriceVal: action.maxPrice,
			}
		case 'RESET_FILTERS':
			return action.payload
		default:
			return state
	}
}
