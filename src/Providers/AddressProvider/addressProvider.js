import { AddressContext } from '../../Context'

import { addressReducer } from '../../reducers/addressReducer'

import { useReducer, useContext, useState } from 'react'

const initialAddressState = { address: [] }

const AddressProvider = props => {
	const [state, addressDispatcher] = useReducer(
		addressReducer,
		initialAddressState
	)

	const [deliveryAddress, setDeliveryAddress] = useState()

	const address = state?.address

	const clearAddressAction = () => {
		addressDispatcher({
			type: 'CLEAR_ADDRESS',
		})
	}

	console.table(state)

	const addAddress = data => {
		addressDispatcher({
			type: 'UPDATE_ADDRESS',
			payload: data,
		})
	}

	const updateAddress = data => {
		addressDispatcher({
			type: 'UPDATE_ADDRESS',
			payload: data,
		})
	}

	const deleteAddress = data => {
		addressDispatcher({
			type: 'UPDATE_ADDRESS',
			payload: data,
		})
	}

	return (
		<AddressContext.Provider
			value={{
				address,
				deliveryAddress,
				updateAddress,
				setDeliveryAddress,
				addAddress,
				clearAddressAction,
				deleteAddress,
			}}>
			{props.children}
		</AddressContext.Provider>
	)
}

const useAddress = () => useContext(AddressContext)

export { useAddress, AddressProvider, initialAddressState }
