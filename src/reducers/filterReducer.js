export const filterReducer = (state, action) => {
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
		case 'RESET_FILTERS':
			return action.payload
		default:
			return state
	}
}
