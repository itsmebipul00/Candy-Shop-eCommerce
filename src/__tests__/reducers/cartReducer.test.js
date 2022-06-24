import { cartReducer } from '../../reducers/cartReducer'
import { initialCartState } from '../../Providers/CartProvider/cartProvider'

describe('testing cartReducer', () => {
	it('should update cart state', () => {
		const result = cartReducer(initialCartState, {
			type: 'UPDATE_CART',
			payload: [{ itemNo: 101 }],
		})

		const finalState = {
			cartItems: [{ itemNo: 101 }],
		}

		expect(result).toEqual(finalState)
	})
	it('should clear cart', () => {
		const initialState = {
			cartItems: [{ itemNo: 101 }],
		}
		const result = cartReducer(initialState, {
			type: 'CLEAR_CART',
		})

		const finalState = {
			cartItems: [],
		}

		expect(result).toEqual(finalState)
	})
})
