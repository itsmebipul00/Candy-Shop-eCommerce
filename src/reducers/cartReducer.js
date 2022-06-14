export const cartReducer = (state = { cartItems: [] }, action) => {
	switch (action.type) {
		case 'UPDATE_CART':
			return {
				cartItems: action.payload,
			}
		case 'CLEAR_CART':
			return {
				cartItems: [],
			}
		default:
			return state
	}
}
