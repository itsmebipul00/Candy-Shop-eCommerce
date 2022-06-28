import { CartItem} from '../data/cart.type'

export interface CartContextValue{
	addtoCartAction: (cartItem: CartItem) => void,
	removeFromCartAction: (id: string) => void,
	clearCartAction: () => void,
	cartItems?: CartItem[],
	updateCartAction: (val: string, id: string, e: React.MouseEvent<HTMLButtonElement, MouseEvent>, pathname?: string) => Promise<void>
}

