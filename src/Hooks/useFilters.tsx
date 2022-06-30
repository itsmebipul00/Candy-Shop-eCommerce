import { CategoryState } from '../types/data/categories.types'
import {
	getPaginatedProducts,
	getFilteredPrices,
	getfilteredProducts,
	getSortedData,
} from '../utils/filters'

import {Product} from '../types/data/products.types'

export const useFilters = (state?: CategoryState, products?: Product[], thispage?: number) => {
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
