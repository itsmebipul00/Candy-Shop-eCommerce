import { wishListReducer } from '../../reducers/wishListReducer'
import { initialWishListState } from '../../Providers/WishListProvider/wishListProvider'

describe('testing wishListReducer', () => {
	it('should update wishlist state', () => {
		const result = wishListReducer(initialWishListState, {
			type: 'UPDATE_WISHLIST',
			payload: [{ itemNo: 101 }],
		})

		const finalState = {
			wishList: [{ itemNo: 101 }],
		}

		expect(result).toEqual(finalState)
	})
	it('should clear wishList', () => {
		const initialState = {
			wishList: [{ itemNo: 101 }],
		}
		const result = wishListReducer(initialState, {
			type: 'CLEAR_WISHLIST',
		})

		const finalState = {
			wishList: [],
		}

		expect(result).toEqual(finalState)
	})
})
