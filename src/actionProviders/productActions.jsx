import {
	ProductsContext,
	UserContext,
	WishListContext,
} from '../context'
import { filters } from '../utils/filters'
import { useState, useEffect, useReducer, useContext } from 'react'
import { categoriesReducer } from '../reducers/categoriesReducer'
import axios from 'axios'

export const ProductsProvider = props => {
	const [productsLoading, setProductsLoading] = useState(false)
	const [products, setProducts] = useState([])
	const [productsError, setProductsError] = useState('')
	const [filterData, setFilterData] = useState(filters)

	const fetchProducts = async () => {
		try {
			const res = await axios.get('/api/products')
			setProducts(res.data.products)
			setProductsError(null)
		} catch (err) {
			setProductsError(err)
		} finally {
			setProductsLoading(false)
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

	console.log(products)
	useEffect(() => {
		fetchProducts()
		fetchCategories()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const handleFilters = event => {
		const { name, value, type, checked } = event.target
		setFilterData(prevFilterData => {
			return {
				...prevFilterData,
				[name]: type === 'checkbox' ? checked : value,
			}
		})
	}

	const resetFilters = () => {
		setFilterData(() => filters)
	}

	const getSortedData = (products, filterData) => {
		if (
			products &&
			products.length > 0 &&
			filterData.sort === 'price-high-to-low'
		) {
			return products.sort((a, b) => b['price'] - a['price'])
		}
		if (
			products &&
			products.length > 0 &&
			filterData.sort === 'price-low-to-high'
		) {
			return products.sort((a, b) => a['price'] - b['price'])
		}
		if (
			products &&
			products.length > 0 &&
			filterData.sort === 'rating-high-to-low'
		) {
			return products.sort((a, b) => b['rating'] - a['rating'])
		}
		if (
			products &&
			products.length > 0 &&
			filterData.sort === 'rating-low-to-high'
		) {
			return products.sort((a, b) => a['rating'] - b['rating'])
		}
		if (products && products.length > 0 && filterData.sort === '') {
			return products
		}
	}

	const getfilteredProducts = (products, filterData) => {
		// getkeys from filterData if true
		const categories = Object.keys(filterData).filter(
			k => filterData[k] === true
		)
		if (categories && categories.length > 0) {
			return products.filter(({ categoryName }) =>
				categories.includes(categoryName)
			)
		} else return products
	}

	const sortedProducts = getSortedData(products, filterData)
	const filteredProducts = getfilteredProducts(
		sortedProducts,
		filterData
	)

	return (
		<ProductsContext.Provider
			value={{
				categories,
				categoriesLoading,
				filteredProducts,
				categoriesError,
				productsError,
				productsLoading,
				filterData,
				handleFilters,
				resetFilters,
			}}>
			{props.children}
		</ProductsContext.Provider>
	)
}
