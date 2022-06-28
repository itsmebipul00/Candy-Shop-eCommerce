import {Address} from './address.type'

export interface OrderedItem {
    categoryName: string,
    countInStock: number,
    createdAt: string,
    description: string,
    id: string,
    image: string,
    price: string,
    qty: number,
    rating: number,
    title:string,
    updatedAt: string,
    _id: string,
}

export interface OrderDetails{
    items: OrderedItem[],
    deliveryAddress: Address,
    paymentId: string,
    totalPrice: number,
}

export interface Order{
    order: OrderDetails
    createdAt: string,
    updatedAt: string,
    _id: string,
}

export type Orders= {
    orders: Order[]
}





