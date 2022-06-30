import axios from 'axios'
import { WishItem } from '../types/data/wishList.type'

const wishServices = {
	removeFromWishList: async (id: string) => {
		try {
			const res = await axios.delete(`/api/user/wishlist/${id}`)
			return res.data
		} catch (error) {
			throw error
		}
	},
	addToWishList: async (product: WishItem) => {
		try {
			const res = await axios.post(`/api/user/wishlist`, {
				product: product,
			})
			return res.data
		} catch (error) {
			throw error
		}
	},
}

export default wishServices
