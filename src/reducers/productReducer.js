export const productReducer = (state, action) => {
	switch (action.type) {
		case 'SUCCESS_PRODUCT':
			return {
				product: action.payload,
			}
		case 'ERROR_PRODUCT':
			return {
				error: action.payload,
			}
		default:
			return state
	}
}
