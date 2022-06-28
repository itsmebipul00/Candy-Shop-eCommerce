import axios from 'axios'

const cartService = {
	addToCart: async cartItem => {
		try {
			const res = await axios.post('/api/user/cart', {
				product: cartItem,
			})
			return res.data
		} catch (error) {
			throw error
		}
	},
	removeFromCart: async id => {
		try {
			const res = await axios.delete(`api/user/cart/${id}`)
			return res.data
		} catch (error) {
			throw error
		}
	},
	decreaseCartItem: async id => {
		try {
			const res = await axios.post(`api/user/cart/${id}`, {
				action: { type: 'decrement' },
			})

			return res.data
		} catch (error) {
			throw error
		}
	},

	increaseCartItem: async id => {
		try {
			const res = await axios.post(`api/user/cart/${id}`, {
				action: { type: 'increment' },
			})
			console.log(res.data.cart)
			return res.data
		} catch (error) {
			throw error
		}
	},
}

export default cartService
