// export type Products{
//     products: Products
// }

export interface Product{
    categoryName: string,
    countInStock: number,
    description: string,
    id: string,
    image: string,
    price: string,
    rating: number,
    title: string,
    _id: string,
}

export type Products={
    products: Product[]
}

