import { AddressContext } from '../../Context'

import { addressReducer } from '../../reducers/addressReducer'

import { actionKind } from '../../types/action/actionKind.type'
import { Address } from '../../types/data/address.type'


import { useReducer, useContext, useState } from 'react'
import { AddressContextValue } from '../../types/providers/addressProvider.type'
type Action = {
	type: actionKind,
	payload?: Address[],
}

type State = {
	address?: Address[],
}
const initialAddressState = { address: [] }

const AddressProvider = (props:React.PropsWithChildren<{}>) => {
	const [state, addressDispatcher] = useReducer<React.Reducer<State, Action>>(
		addressReducer,
		initialAddressState,
	)

	const [deliveryAddress, setDeliveryAddress] = useState<Address>()

	const address: Address[]|undefined = state?.address

	const clearAddressAction = () => {
		addressDispatcher({
			type: actionKind.ClearAddress,
		})
	}

	const setAddress = (data: Address[]) => {
		addressDispatcher({
			type: actionKind.UpdateAddress,
			payload: data,
		})
	}

	return (
		<AddressContext.Provider
			value={{
				address,
				deliveryAddress,
				setAddress,
				setDeliveryAddress,
				clearAddressAction,
			}}>
			{props.children}
		</AddressContext.Provider>
	)
}

const useAddress = () => useContext(AddressContext) as AddressContextValue

export { useAddress, AddressProvider, initialAddressState }
