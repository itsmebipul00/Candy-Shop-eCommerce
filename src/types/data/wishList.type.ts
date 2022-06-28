
export interface WishItem {
    categoryName: string,
    countInStock: number,
    createdAt: string,
    description: string,
    id: string,
    image: string,
    price: string,
    rating: number,
    title:string,
    updatedAt: string,
    _id: string,
}

export type WishItems= {
    cartItems: WishItem[]
}