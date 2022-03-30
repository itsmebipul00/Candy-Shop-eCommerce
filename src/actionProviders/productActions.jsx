import {
	ProductsContext,
	UserContext,
	WishListContext,
} from '../context'
import { filters } from '../utils/filters'
import { useState, useEffect, useReducer, useContext } from 'react'
import { wishListReducer } from '../reducers/productReducers'
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

	console.log(products)
	useEffect(() => {
		fetchProducts()
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
				filteredProducts,
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

export const WishListProvider = props => {
	const [{ wishList }, dispatch] = useReducer(wishListReducer, {
		wishList: [],
	})
	const { userInfo } = useContext(UserContext)

	const config = {
		headers: {
			authorization: userInfo.encodedToken,
		},
	}

	console.log(userInfo)

	const toggleWishListAction = async product => {
		const itemExists =
			wishList.findIndex(x => x._id === product._id) === -1
				? false
				: true

		console.log(itemExists)

		console.log(config)

		if (itemExists) {
			try {
				const res = await axios.delete(
					`/api/user/wishlist/${product._id}`,
					config
				)
				const data = await res.data.wishlist
				console.log(data)
				dispatch({
					type: 'REMOVE_FROM_WISHLIST',
					payload: data,
				})
				// localStorage to setWishlist
			} catch (error) {
				console.log(error)
				// toast Invalid request error
			}
		} else {
			try {
				const res = await axios.post(
					`/api/user/wishlist`,
					{ product: product },
					config
				)
				const data = await res.data.wishlist
				dispatch({
					type: 'REMOVE_FROM_WISHLIST',
					payload: data,
				})
			} catch (error) {
				console.log(error)
				// Invalid request toast
			}
		}

		console.log(itemExists)
	}

	const clearWishListAction = () => {
		dispatch({
			type: 'CLEAR_WISHLIST',
		})
	}

	const getWishListAction = async () => {
		try {
			const res = await axios.get('/api/user/wishlist', config)
			const data = await res.data.wishlist
			dispatch({
				type: 'GET_WISHLIST_ITEMS',
				payload: data,
			})
		} catch (error) {
			console.log(error)
			// Invalid toast
		}
	}

	return (
		<WishListContext.Provider
			value={{
				toggleWishListAction,
				clearWishListAction,
				getWishListAction,
				wishList,
			}}>
			{props.children}
		</WishListContext.Provider>
	)
}
