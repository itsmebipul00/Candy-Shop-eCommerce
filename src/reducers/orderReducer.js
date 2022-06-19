export const orderReducer = (state = { orders: [] }, action) => {
	switch (action.type) {
		case 'ORDER_USER':
			return {
				orders: action.payload,
			}
		case 'ORDER_ERROR':
			return {
				error: action.payload,
			}
		case 'CLEAR_ORDERS':
			return {
				orders: [],
			}
		default:
			return state
	}
}
