import { OrdersContext } from '../../Context'

import { orderReducer } from '../../reducers/orderReducer'

import { useReducer, useContext } from 'react'

import orderService from '../../Services/orderServices.js'

import { actionKind } from '../../types/action/actionKind.type'
import {  Order } from '../../types/data/orders.type'

const initialOrderState = { orders: undefined }

type Action = {
	type: actionKind,
	payload?: Order[],
}

type State = {
	orders?: Order[],
}

const OrdersProvider = (props:React.PropsWithChildren<{}>) => {
	const [state, ordersDispatcher] = useReducer<React.Reducer<State, Action>>(
		orderReducer,
		initialOrderState
	)

	const orders: Order[]|undefined = state?.orders

	console.log(orders)

	const updateOrder = (data: Order[]) => {
		console.log(data)
		ordersDispatcher({
			type: actionKind.UpdateOrder,
			payload: data,
		})
	}

	const addOrderAction = (order: Order) => {
		orderService
			.addOrderAction(order)
			.then(data => updateOrder(data.orders))
	}

	const clearOrdersAction = () => {
		ordersDispatcher({
			type: actionKind.ClearOrders,
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

export { useOrders, OrdersProvider, initialOrderState }
