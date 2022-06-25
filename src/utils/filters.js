export const getPaginatedProducts = (products, state) => {
	const lastProduct = state * 8
	const firstProduct = lastProduct - 8

	if (products && products.length > 0) {
		return products.slice(firstProduct, lastProduct)
	}
}

export const getFilteredPrices = (products, state) => {
	if (products && products.length > 0) {
		return products.filter(
			pro =>
				Number(pro.price) >= Number(state.minPriceVal) &&
				Number(pro.price) <= Number(state.maxPriceVal)
		)
	}
}

export const getfilteredProducts = (products, state) => {
	// getkeys from state if true

	const categories = Object.keys(state).filter(k => state[k] === true)

	if (categories && categories.length > 0) {
		return products.filter(({ categoryName }) =>
			categories.includes(categoryName)
		)
	} else return products
}

export const getSortedData = (products, state) => {
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

export const getCategoryNames = categories => {
	return categories
		.map(cat => cat.categoryName)
		.reduce((acc, val) => ({ ...acc, [val]: false }), {})
}
