import { CartItem} from '../data/cart.type'
import { Product } from '../data/products.types'

export interface CartContextValue{
	addtoCartAction: (cartItem: Product) => void,
	removeFromCartAction: (id: string) => void,
	clearCartAction: () => void,
	cartItems?: CartItem[],
	updateCartAction: (val: string, id: string, e: React.MouseEvent<HTMLButtonElement, MouseEvent>, pathname?: string) => Promise<void>
}

