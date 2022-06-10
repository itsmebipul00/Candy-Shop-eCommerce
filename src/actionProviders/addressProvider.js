import { AddressContext } from '../context'

import { addressReducer } from '../reducers/addressReducer.js'

import { useReducer, useContext } from 'react'
import { useState } from 'react'

const AddressProvider = props => {
	const [address, addressDispatcher] = useReducer(addressReducer, [])

	const [deliveryAddress, setDeliveryAddress] = useState()

	return (
		<AddressContext.Provider
			value={{
				address,
				deliveryAddress,
				setDeliveryAddress,
				addressDispatcher,
			}}>
			{props.children}
		</AddressContext.Provider>
	)
}

const useAddress = () => useContext(AddressContext)

export { useAddress, AddressProvider }
