import { Address} from '../data/address.type'

export interface AddressContextValue{
    address?: Address[],
    deliveryAddress?: Address,
    setAddress: (data: Address[]) => void,
    setDeliveryAddress: React.Dispatch<React.SetStateAction<Address|undefined>>,
    clearAddressAction: () => void
}