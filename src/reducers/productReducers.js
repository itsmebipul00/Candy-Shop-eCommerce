export const productReducers = (state = { products: [] }, action) => {
	switch (action.type) {
		case 'UPDATE_PRODUCTS':
			return { products: action.payload }

		case 'PRODUCTS_ERROR':
			return { error: action.payload }

		default:
			return state
	}
}
