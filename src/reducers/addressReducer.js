export const addressReducer = (state = { address: [] }, action) => {
	console.log(action.type)
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
			console.log('here')
			return {
				address: [],
			}
		default:
			return state
	}
}
