export const wishListReducer = (state = { wishList: [] }, action) => {
	switch (action.type) {
		case 'ADD_TO_WISHLIST':
			return {
				wishList: action.payload,
			}
		case 'REMOVE_FROM_WISHLIST':
			return {
				wishList: action.payload,
			}
		case 'GET_WISHLIST_ITEMS':
			return {
				wishList: action.payload,
			}
		case 'CLEAR_WISHLIST':
			return {
				wishList: [],
			}
		default:
			return state
	}
}
