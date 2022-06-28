import {Product} from '../types/data/products.types'
import {Category, CategoryState} from '../types/data/categories.types'

export const getPaginatedProducts = (products?: Product[], state?: number) => {
	const lastProduct = state && state * 8
	const firstProduct = lastProduct && lastProduct - 8

	if (products && products.length > 0) {
		return products.slice(firstProduct, lastProduct)
	}
}

export const getFilteredPrices = (products ?: Product[], state?: CategoryState) => {
	if (products && products.length > 0) {
		return products.filter(
			pro =>
				Number(pro.price) >= Number(state?.minPriceVal) &&
				Number(pro.price) <= Number(state?.maxPriceVal)
		)
	}
}

export const getfilteredProducts = (products?: Product[], state?: CategoryState) => {
	// getkeys from state if true

	const categories = state && Object.keys(state).filter(k => state[k] === true)

	if (categories && categories.length > 0) {
		return products?.filter(({ categoryName }) =>
			categories.includes(categoryName)
		)
	} else return products
}

export const getSortedData = (products?: Product[], state?: CategoryState) => {
	if (
		products &&
		products.length > 0 && state &&
		state.sort === 'price-high-to-low'
	) {
		return products.sort((a, b) =>Number(b['price'])- Number(a['price']) )
	}
	if (
		products &&
		products.length > 0 && state &&
		state.sort === 'price-low-to-high'
	) {
		return products.sort((a, b) => Number(a['price'])- Number(b['price']))
	}
	if (
		products &&
		products.length > 0 && state &&
		state.sort === 'rating-high-to-low'
	) {
		return products.sort((a, b) => b['rating'] - a['rating'])
	}
	if (
		products &&
		products.length > 0 && state &&
		state.sort === 'rating-low-to-high'
	) {
		return products.sort((a, b) => a['rating'] - b['rating'])
	}
	if (products && products.length > 0 && state?.sort === '') {
		return products
	}
}

export const getCategoryNames = (categories?: Category[]) => {
	return categories
		?.map(cat => cat.categoryName)
		?.reduce((acc, val) => ({ ...acc, [val]: false }), {})
}
