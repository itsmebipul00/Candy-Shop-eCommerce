import { getPaginatedProducts } from '../../utils/filters'

describe('testing paginatedProducts', () => {
	it('should return paginated products', () => {
		const initailState = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

		const finalState = [9, 10, 11, 12, 13]

		const result = getPaginatedProducts(initailState, 2)

		expect(result).toEqual(finalState)
	})
})
