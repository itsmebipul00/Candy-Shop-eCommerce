
export interface CartItem {
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

export type CartItems= {
    cartItems: CartItem[]
}