

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
    chocolates?: Boolean,
    darkChocolate?:Boolean,
    fizzy?:Boolean,
    gummies?:Boolean,
    jellies?:Boolean,
    lollipop?:Boolean,
    marshmello?:Boolean,
    rasberry?:Boolean,
}

//define type for initial state in the provider