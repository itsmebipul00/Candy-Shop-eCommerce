import axios from 'axios'

const productService = {
	getProducts: async () => {
		try {
			const res = await axios.get('/api/products')
			return res.data
		} catch (error) {
			throw error
		}
	},
	getCategories: async () => {
		try {
			const res = await axios.get('/api/categories')
			return res.data
		} catch (error) {
			throw error
		}
	},
	getProduct: async id => {
		try {
			const res = await axios.get(`/api/products/${id}`)
			throw res.data
		} catch (error) {
			throw error
		}
	},
}

export default productService
