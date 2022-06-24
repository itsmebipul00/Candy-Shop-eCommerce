import { orderReducer } from '../../reducers/orderReducer'
import { initialOrderState } from '../../Providers/OrdersProvider/ordersProvider'

describe('testing orderReducer', () => {
	it('should update order state', () => {
		const result = orderReducer(initialOrderState, {
			type: 'ORDER_USER',
			payload: [{ itemNo: 101 }],
		})

		const finalState = {
			orders: [{ itemNo: 101 }],
		}

		expect(result).toEqual(finalState)
	})
	it('should clear orders', () => {
		const initialState = {
			orders: [{ itemNo: 101 }],
		}
		const result = orderReducer(initialState, {
			type: 'CLEAR_ORDERS',
		})

		const finalState = {
			orders: [],
		}

		expect(result).toEqual(finalState)
	})
})
