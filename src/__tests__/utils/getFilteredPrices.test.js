import { getFilteredPrices } from '../../utils/filters'

describe('testing filteredPrices', () => {
	it('should return products of filtered prices', () => {
		const initialState = [
			{
				price: 500,
			},
			{
				price: 600,
			},
			{
				price: 700,
			},
		]

		const finalState = [
			{
				price: 600,
			},
			{
				price: 700,
			},
		]

		const maxMinPrice = { minPriceVal: 600, maxPriceVal: 700 }

		const result = getFilteredPrices(initialState, maxMinPrice)

		expect(result).toEqual(finalState)
	})
})
