export const addressReducer = (state, action) => {
	console.log(state, state.length)
	switch (action.type) {
		case 'NEW_ADDRESS':
			if (state.length > 0) {
				return [...state, action.payload]
			} else {
				return [action.payload]
			}
		case 'DELETE_ADDRESS':
			return state.filter(add => add._id !== action.payload)
		case 'UPDATE_ADDRESS':
			return state
		default:
			return state
	}
}
