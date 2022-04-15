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
			const trimmedState = state.filter(
				add => add._id !== action.payload._id
			)
			return [...trimmedState, action.payload]
		default:
			return state
	}
}
