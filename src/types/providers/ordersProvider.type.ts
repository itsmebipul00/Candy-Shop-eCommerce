import {Order, OrderDetails} from '../data/orders.type'

export interface OrderContextValue{
    addOrderAction: (order: OrderDetails) => void,
    orders?: Order[],
    clearOrdersAction: () => void
}