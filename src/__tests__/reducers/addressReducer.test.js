import { addressReducer } from '../../reducers/addressReducer'
import { initialAddressState } from '../../Providers/AddressProvider/addressProvider'

describe('testing addressReducer', () => {
	it('should add new address', () => {
		const result = addressReducer(initialAddressState, {
			type: 'UPDATE_ADDRESS',
			payload: [{ houseNo: 101 }],
		})

		const finalState = {
			address: [{ houseNo: 101 }],
		}

		expect(result).toEqual(finalState)
	})
	it('should clear address', () => {
		const initialState = {
			address: [{ houseNo: 101 }],
		}
		const result = addressReducer(initialState, {
			type: 'CLEAR_ADDRESS',
		})

		const finalState = {
			address: [],
		}

		expect(result).toEqual(finalState)
	})
})
