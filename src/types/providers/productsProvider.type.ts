import React from 'react'
import {Category, CategoryState} from '../data/categories.types'
import {Product} from '../data/products.types'



export interface ProductsContextValue{
    setthisPage: React.Dispatch<React.SetStateAction<number>>,
    categories?: Category[],
    filteredProducts?: Product[],
    state?: CategoryState,
    handleSorting: (name: string, value: string) => void,
    handleCategories: (feild: string, checked: Boolean) => void,
    resetFilters: () => void,
    handlePriceChange: (minPrice: number, maxPrice:number) => void,
    products?: Product[],
}

