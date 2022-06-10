import { OrdersContext } from '../context'

import { orderReducer } from '../reducers/orderReducer.js'

import { useReducer, useContext } from 'react'

import axios from 'axios'

const OrdersProvider = props => {
	const [{ orders }, ordersDispatcher] = useReducer(orderReducer, {
		orders: [],
	})

	const config = {
		headers: {
			authorization: localStorage.getItem('userToken'),
		},
	}

	const addOrderAction = async order => {
		console.log(order)
		try {
			const res = await axios.post(
				'/api/user/order',
				{ order: order },
				config
			)
			const data = await res.data.orders

			console.log(data)

			ordersDispatcher({
				type: 'ORDER_USER',
				payload: data,
			})
		} catch (error) {
			console.log(error)
			ordersDispatcher({
				type: 'ORDER_ERROR',
				payload: error,
			})
		}
	}

	return (
		<OrdersContext.Provider value={{ addOrderAction, orders }}>
			{props.children}
		</OrdersContext.Provider>
	)
}

const useOrders = () => useContext(OrdersContext)

export { useOrders, OrdersProvider }
