export const wishListReducer = (state = { wishList: [] }, action) => {
	switch (action.type) {
		case 'WISHED_PRODUCTS_PAGE':
			return {
				wishList: action.payload,
			}
		default:
			return state
	}
}
