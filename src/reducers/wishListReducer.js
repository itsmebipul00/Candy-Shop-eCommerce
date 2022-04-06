export const wishListReducer = (state = { wishList: [] }, action) => {
	switch (action.type) {
		case 'UPDATE_WISHLIST':
			return {
				wishList: action.payload,
			}
		case 'WISHLIST_ERROR':
			return {
				error: action.payload,
			}
		case 'CLEAR_WISHLIST':
			return {
				wishList: [],
			}
		default:
			return state
	}
}
