import axios from 'axios'

import {Product} from '../types/data/products.types'

const cartService = {
	addToCart: async (cartItem: Product) => {
		try {
			const res = await axios.post('/api/user/cart', {
				product: cartItem,
			})
			return res.data
		} catch (error) {
			throw error
		}
	},
	removeFromCart: async (id: string) => {
		try {
			const res = await axios.delete(`api/user/cart/${id}`)
			return res.data
		} catch (error) {
			throw error
		}
	},
	decreaseCartItem: async (id: string) => {
		try {
			const res = await axios.post(`api/user/cart/${id}`, {
				action: { type: 'decrement' },
			})
			return res.data
		} catch (error) {
			throw error
		}
	},

	increaseCartItem: async (id: string) => {
		try {
			const res = await axios.post(`api/user/cart/${id}`, {
				action: { type: 'increment' },
			})
			return res.data
		} catch (error) {
			throw error
		}
	},
}

export default cartService
