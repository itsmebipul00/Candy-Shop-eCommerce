import axios from 'axios'
import { OrderDetails } from '../types/data/orders.type'

const orderService = {
	addOrderAction: async (order: OrderDetails) => {
		try {
			const res = await axios.post('/api/user/order', {
				order: order,
			})
			return res.data
		} catch (error) {
			throw error
		}
	},
}

export default orderService
