

export interface Category{
    categoryName: string,
    id: number,
    image: string,
    _id: string
}

export type Categories= {
    categories: Category[]
}

export interface CategoryState {
    maxPriceVal?:number,
    minPriceVal?:number,
    sort?: string,
    chocolates?: boolean,
    darkChocolate?:boolean,
    fizzy?:boolean,
    gummies?:boolean,
    jellies?:boolean,
    lollipop?:boolean,
    marshmello?:boolean,
    rasberry?:boolean,
}

//define type for initial state in the provider