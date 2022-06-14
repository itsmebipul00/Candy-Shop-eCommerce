import { AddressContext } from '../context'

import { addressReducer } from '../reducers/addressReducer.js'

import { useReducer, useContext } from 'react'
import { useState } from 'react'

const AddressProvider = props => {
	const [state, addressDispatcher] = useReducer(addressReducer, [])

	const [deliveryAddress, setDeliveryAddress] = useState()

	const address = state?.address

	const clearAddressAction = () => {
		addressDispatcher({
			type: 'CLEAR_ADDRESS',
		})
	}

	return (
		<AddressContext.Provider
			value={{
				address,
				deliveryAddress,
				setDeliveryAddress,
				addressDispatcher,
				clearAddressAction,
			}}>
			{props.children}
		</AddressContext.Provider>
	)
}

const useAddress = () => useContext(AddressContext)

export { useAddress, AddressProvider }
