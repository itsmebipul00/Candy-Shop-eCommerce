import { ProductsContext } from '../context'
import { useEffect, useReducer, useContext } from 'react'
import { filterReducer } from '../reducers/filterReducer'
import { useState } from 'react'
import { useFilters } from '../Hooks/useFilters'
import { getCategoryNames } from '../utils/filters'

import productService from '../Services/productServices'

const ProductsProvider = props => {
	const [products, setProducts] = useState([])
	const [categories, setCategories] = useState([])

	useEffect(() => {
		Promise.allSettled([
			productService.getProducts(),
			productService.getCategories(),
		]).then(data => {
			setProducts(data[0].value.products)
			setCategories(data[1].value.categories)
		})
	}, [])

	const categoriesState = getCategoryNames(categories)

	const initailState = {
		...categoriesState,
		sort: '',
		rating: '',
		minPriceVal: 0,
		maxPriceVal: 500,
	}

	const [state, filterDispatch] = useReducer(
		filterReducer,
		initailState
	)

	const handleSorting = (name, value) => {
		filterDispatch({
			type: 'HANDLE_SORT',
			feild: name,
			payload: value,
		})
	}

	const handleCategories = (name, checked) => {
		filterDispatch({
			type: 'FILTER_CATEGORIES',
			feild: name,
			payload: checked,
		})
	}

	const handlePriceChange = (minP, maxP) => {
		filterDispatch({
			type: 'FILTER_PRICES',
			minPrice: minP,
			maxPrice: maxP,
		})
	}

	const resetFilters = () =>
		filterDispatch({ type: 'RESET_FILTERS', payload: initailState })

	const [thispage, setthisPage] = useState(1)

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

const useProducts = () => useContext(ProductsContext)

export { useProducts, ProductsProvider }
