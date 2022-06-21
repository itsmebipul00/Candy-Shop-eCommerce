import { AddressContext } from '../../Context'

import { addressReducer } from '../../reducers/addressReducer'

import { useReducer, useContext, useState } from 'react'

const AddressProvider = props => {
	const [state, addressDispatcher] = useReducer(addressReducer, [])

	const [deliveryAddress, setDeliveryAddress] = useState()

	const address = state?.address

	const clearAddressAction = () => {
		addressDispatcher({
			type: 'CLEAR_ADDRESS',
		})
	}

	const addAddress = data => {
		addressDispatcher({
			type: 'NEW_ADDRESS',
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
			type: 'DELETE_ADDRESS',
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

export { useAddress, AddressProvider }
