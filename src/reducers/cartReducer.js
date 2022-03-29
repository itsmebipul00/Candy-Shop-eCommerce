export const cartReducer = (state = { cartItems: [] }, action) => {
	switch (action.type) {
		case 'ADD_TO_CART':
			return {
				cartItems: action.payload,
			}
		case 'REMOVE_FROM_CART':
			return {
				cartItems: action.payload,
			}
		case 'GET_CART_ITEMS':
			return {
				cartItems: action.payload,
			}
		case 'UPDATE_CART_ITEM':
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
