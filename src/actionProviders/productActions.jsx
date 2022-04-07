import { ProductsContext } from '../context'
import { useEffect, useReducer, useContext } from 'react'
import { categoriesReducer } from '../reducers/categoriesReducer'
import axios from 'axios'
import { filterReducer } from '../reducers/filterReducer'
import { productReducers } from '../reducers/productReducers'

const ProductsProvider = props => {
	const [{ products, error: productsError }, dispatch] = useReducer(
		productReducers,
		{
			products: [],
		}
	)

	const setProducts = data =>
		dispatch({
			type: 'UPDATE_PRODUCTS',
			payload: data,
		})

	const setError = data =>
		dispatch({
			type: 'PRODUCTS_ERROR',
			payload: data,
		})

	const fetchProducts = async () => {
		try {
			const res = await axios.get('/api/products')
			setProducts(res.data.products)
		} catch (error) {
			setError(error.message)
		}
	}

	const [
		{
			categories,
			loading: categoriesLoading,
			error: categoriesError,
		},
		categoriesDispatcher,
	] = useReducer(categoriesReducer, {
		categories: [],
	})

	const successCategories = data =>
		categoriesDispatcher({
			type: 'CATEGORIES_SUCCESS',
			payload: data,
		})

	const fetchCategories = async () => {
		try {
			categoriesDispatcher({ type: 'CATEGORIES_REQUEST' })

			const res = await axios.get('/api/categories')

			successCategories(res.data.categories)
		} catch (error) {
			categoriesDispatcher({ type: 'CATEGORIES_SUCCESS' })
		}
	}

	useEffect(() => {
		fetchProducts()
		fetchCategories()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	// Better approach is to take categories from category state as initailState --- will do later
	const initailState = {
		marshmello: false,
		chocolates: false,
		darkChocolate: false,
		fizzy: false,
		gummies: false,
		jellies: false,
		lollipop: false,
		rasberry: false,
		sort: '',
		rating: '',
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

	const resetFilters = () =>
		filterDispatch({ type: 'RESET_FILTERS', payload: initailState })

	const getSortedData = (products, state) => {
		if (
			products &&
			products.length > 0 &&
			state.sort === 'price-high-to-low'
		) {
			return products.sort((a, b) => b['price'] - a['price'])
		}
		if (
			products &&
			products.length > 0 &&
			state.sort === 'price-low-to-high'
		) {
			return products.sort((a, b) => a['price'] - b['price'])
		}
		if (
			products &&
			products.length > 0 &&
			state.sort === 'rating-high-to-low'
		) {
			return products.sort((a, b) => b['rating'] - a['rating'])
		}
		if (
			products &&
			products.length > 0 &&
			state.sort === 'rating-low-to-high'
		) {
			return products.sort((a, b) => a['rating'] - b['rating'])
		}
		if (products && products.length > 0 && state.sort === '') {
			return products
		}
	}

	const getfilteredProducts = (products, state) => {
		// getkeys from state if true
		const categories = Object.keys(state).filter(
			k => state[k] === true
		)

		if (categories && categories.length > 0) {
			return products.filter(({ categoryName }) =>
				categories.includes(categoryName)
			)
		} else return products
	}

	const sortedProducts = getSortedData(products, state)
	const filteredProducts = getfilteredProducts(sortedProducts, state)

	return (
		<ProductsContext.Provider
			value={{
				categories,
				categoriesLoading,
				filteredProducts,
				categoriesError,
				productsError,
				state,
				handleSorting,
				handleCategories,
				resetFilters,
			}}>
			{props.children}
		</ProductsContext.Provider>
	)
}

const useProducts = () => useContext(ProductsContext)

export { useProducts, ProductsProvider }
