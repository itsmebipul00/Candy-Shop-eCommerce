import { WishItem} from '../data/wishList.type'

export interface WishContextValue{
    toggleWishListAction: (product: WishItem) => void,
    clearWishListAction: () => void,
    wishList?: WishItem[]
}