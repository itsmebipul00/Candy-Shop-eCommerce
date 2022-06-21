import { OrdersContext } from '../../Context'

import { orderReducer } from '../../reducers/orderReducer'

import { useReducer, useContext } from 'react'

import orderService from '../../Services/orderServices'

const OrdersProvider = props => {
	const [{ orders }, ordersDispatcher] = useReducer(orderReducer, {
		orders: [],
	})

	const updateOrder = data => {
		ordersDispatcher({
			type: 'ORDER_USER',
			payload: data,
		})
	}

	const addOrderAction = order => {
		orderService
			.addOrderAction(order)
			.then(data => updateOrder(data.orders))
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
