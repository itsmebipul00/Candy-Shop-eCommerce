import axios from 'axios'

const productService = {
	getProducts: async () => {
		try {
			const res = await axios.get('/api/products')
			console.log(res.data.products)
			return res.data
		} catch (error) {
			throw error
		}
	},
	getCategories: async () => {
		try {
			const res = await axios.get('/api/categories')
			console.log(res.data.categories)
			return res.data
		} catch (error) {
			throw error
		}
	},
	getProduct: async id => {
		try {
			const res = await axios.get(`/api/products/${id}`)
			return res.data
		} catch (error) {
			throw error
		}
	},
}

export default productService
