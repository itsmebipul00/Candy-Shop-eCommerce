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
		try {
			const res = await axios.post(
				'/api/user/order',
				{ order: order },
				config
			)
			const data = await res.data.orders

			ordersDispatcher({
				type: 'ORDER_USER',
				payload: data,
			})
		} catch (error) {
			ordersDispatcher({
				type: 'ORDER_ERROR',
				payload: error,
			})
		}
	}

	const clearOrdersAction = () => {
		ordersDispatcher({
			type: 'CLEAR_ORDERS',
		})
	}

	return (
		<OrdersContext.Provider
			value={{ addOrderAction, orders, clearOrdersAction }}>
			{props.children}
		</OrdersContext.Provider>
	)
}

const useOrders = () => useContext(OrdersContext)

export { useOrders, OrdersProvider }
