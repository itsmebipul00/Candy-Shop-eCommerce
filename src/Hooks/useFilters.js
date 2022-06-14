import {
	getPaginatedProducts,
	getFilteredPrices,
	getfilteredProducts,
	getSortedData,
} from '../utils/filters'

export const useFilters = (state, products, thispage) => {
	const sortedProducts = getSortedData(products, state)

	const filteredCategories = getfilteredProducts(
		sortedProducts,
		state
	)
	const filteredPrices = getFilteredPrices(filteredCategories, state)

	const filteredProducts = getPaginatedProducts(
		filteredPrices,
		thispage
	)

	return filteredProducts
}
