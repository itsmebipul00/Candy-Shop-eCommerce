import { AddressContext } from '../context'

import { addressReducer } from '../reducers/addressReducer.js'

import { useReducer, useContext } from 'react'

const AddressProvider = props => {
	const [address, addressDispatcher] = useReducer(addressReducer, [])

	return (
		<AddressContext.Provider value={{ address, addressDispatcher }}>
			{props.children}
		</AddressContext.Provider>
	)
}

const useAddress = () => useContext(AddressContext)

export { useAddress, AddressProvider }
