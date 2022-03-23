import { ProductsContext } from '../context'
import { useAxios } from '../utils/useAxios'
import { filters } from '../utils/filters'
import { useState } from 'react'

export const ProductsProvider = props => {
	const {
		response: products,
		loading: productsLoading,
		error: productsError,
	} = useAxios({
		method: 'GET',
		url: '/api/products',
	})

	const [filterData, setFilterData] = useState(filters)

	const handleFilters = event => {
		const { name, value, type, checked } = event.target
		setFilterData(prevFilterData => {
			return {
				...prevFilterData,
				[name]: type === 'checkbox' ? checked : value,
			}
		})
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

	console.log(sortedProducts)
	console.log(filteredProducts)
	return (
		<ProductsContext.Provider
			value={{
				filteredProducts,
				productsError,
				productsLoading,
				filterData,
				handleFilters,
			}}>
			{props.children}
		</ProductsContext.Provider>
	)
}
