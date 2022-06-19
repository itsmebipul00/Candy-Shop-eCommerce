import axios from 'axios'

const wishServices = {
	removeFromWishList: async id => {
		try {
			const res = await axios.delete(`/api/user/wishlist/${id}`)
			return res.data
		} catch (error) {
			throw error
		}
	},
	addToWishList: async product => {
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
