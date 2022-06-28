import { ProductsContext } from '../../Context'
import React, { useEffect, useReducer, useContext } from 'react'
import { filterReducer } from '../../reducers/filterReducer'
import { useState } from 'react'
import { useFilters } from '../../Hooks/useFilters'
import { getCategoryNames } from '../../utils/filters'

import productService from '../../Services/productServices'

import {actionKind} from '../../types/action/actionKind.type'
import {CategoryState, Category} from '../../types/data/categories.types'
import {Product} from '../../types/data/products.types'
import {ProductsContextValue} from '../../types/providers/productsProvider.type'

type Action={
	type: actionKind,
	payload?: string,
	checked?: Boolean,
	feild: string,
	minPrice?: number,
	maxPrice?: number,
	initialState?: CategoryState
}

const ProductsProvider = (props:React.PropsWithChildren<{}>) => {
	const [products, setProducts] = useState<Product[]|undefined>(undefined)
	const [categories, setCategories] = useState<Category[]|undefined>(undefined)

	console.log(products)

	useEffect(() => {
		Promise.allSettled([
			productService.getProducts(),
			productService.getCategories(),
		]).then(data => {
  			// @ts-ignore
			setProducts(data[0].value.products)
			  // @ts-ignore
			setCategories(data[1].value.categories)
		})
	}, [])

	const categoriesState = getCategoryNames(categories)

	const initialFilterState = {
		...categoriesState,
		sort: '',
		minPriceVal: 0,
		maxPriceVal: 500,
	}
	

	const [state, filterDispatch] = useReducer<React.Reducer<CategoryState|undefined, Action>>(
		filterReducer,
		initialFilterState
	)

	const handleSorting = (name: string, value: string) => {
		filterDispatch({
			type: actionKind.HandleSort,
			feild: name,
			payload: value,
		})
	}

	const handleCategories = (name: string, checked: Boolean) => {
		filterDispatch({
			type: actionKind.FilterCategories,
			feild: name,
			checked: checked,
		})
	}

	const handlePriceChange = (minP: number, maxP: number) => {
		filterDispatch({
			type: actionKind.FilterPrices,
			minPrice: minP,
			maxPrice: maxP,
			feild: '',
		})
	}

	const resetFilters = () =>
		filterDispatch({
			type: actionKind.ResetFilters,
			initialState: initialFilterState,
			feild: '',
		})

	const [thispage, setthisPage] = useState<number>(1)

	const filteredProducts = useFilters(state, products, thispage)

	return (
		<ProductsContext.Provider
			value={{
				setthisPage,
				categories,
				filteredProducts,
				state,
				handleSorting,
				handleCategories,
				resetFilters,
				handlePriceChange,
				products,
			}}>
			{props.children}
		</ProductsContext.Provider>
	)
}

const useProducts = () => useContext(ProductsContext) as ProductsContextValue

export { useProducts, ProductsProvider }
