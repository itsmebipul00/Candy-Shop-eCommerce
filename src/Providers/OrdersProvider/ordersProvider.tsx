import { OrdersContext } from '../../Context'

import { orderReducer } from '../../reducers/orderReducer'

import { useReducer, useContext } from 'react'

import orderService from '../../Services/orderServices'

import { actionKind } from '../../types/action/actionKind.type'
import {  Order, OrderDetails } from '../../types/data/orders.type'
import { OrderContextValue } from '../../types/providers/ordersProvider.type'

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


	const updateOrder = (data: Order[]) => {
		ordersDispatcher({
			type: actionKind.UpdateOrder,
			payload: data,
		})
	}

	const addOrderAction = (order: OrderDetails) => {
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

const useOrders = () => useContext(OrdersContext) as OrderContextValue

export { useOrders, OrdersProvider, initialOrderState }
