export const addressReducer = (state = { address: [] }, action) => {
	console.log(action.payload)
	switch (action.type) {
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
