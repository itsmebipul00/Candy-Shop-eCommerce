import axios from 'axios'

const orderService = {
	addOrderAction: async order => {
		try {
			const res = await axios.post('/api/user/order', {
				order: order,
			})
			console.log(res.data)
			return res.data
		} catch (error) {
			throw error
		}
	},
}

export default orderService
