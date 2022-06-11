export const orderReducer = (state, action) => {
	switch (action.type) {
		case 'ORDER_USER':
			return {
				orders: action.payload,
			}
		case 'ORDER_ERROR':
			return {
				error: action.payload,
			}
		default:
			return state
	}
}
