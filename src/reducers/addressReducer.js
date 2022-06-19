export const addressReducer = (state = { address: [] }, action) => {
	switch (action.type) {
		case 'NEW_ADDRESS':
			return {
				address: action.payload,
			}
		case 'DELETE_ADDRESS':
			return {
				address: action.payload,
			}
		case 'UPDATE_ADDRESS':
			return {
				address: action.payload,
			}
		case 'CLEAR_ADDRESS':
			return {
				address: [],
			}
		default:
			return state
	}
}
