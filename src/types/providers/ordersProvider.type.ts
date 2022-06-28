import {Order} from '../data/orders.type'

export interface OrderContextValue{
    addOrderAction: (order: Order) => void,
    orders?: Order[],
    clearOrdersAction: () => void
}