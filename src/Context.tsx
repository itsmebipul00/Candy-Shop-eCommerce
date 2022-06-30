import {ProductsContextValue} from './types/providers/productsProvider.type'
import {AddressContextValue} from './types/providers/addressProvider.type'
import {CartContextValue} from './types/providers/cartProvider.type'
import {OrderContextValue} from './types/providers/ordersProvider.type'
import {UserContextValue} from './types/providers/usersProvider.type'
import {WishContextValue} from './types/providers/wishProvider.type'


import { createContext } from 'react'

const ProductsContext = createContext<ProductsContextValue|undefined>(undefined)

const UserContext = createContext<UserContextValue|undefined>(undefined)

const WishListContext = createContext<WishContextValue|undefined>(undefined)

const CartContext = createContext<CartContextValue|undefined>(undefined)

const AddressContext = createContext<AddressContextValue|undefined>(undefined)

const OrdersContext = createContext<OrderContextValue|undefined>(undefined)

export {
	ProductsContext,
	UserContext,
	WishListContext,
	CartContext,
	AddressContext,
	OrdersContext,
}
