import { getfilteredProducts } from '../../utils/filters'

describe('testing categories with products', () => {
	it('should return products according to categoires', () => {
		const initialState = {
			marshmello: true,
			chocolates: true,
			jellies: false,
			lollipops: false,
		}

		const products = [
			{ categoryName: 'marshmello' },
			{ categoryName: 'chocolates' },
			{ categoryName: 'jellies' },
			{ categoryName: 'lollipops' },
		]

		const finalProducts = [
			{ categoryName: 'marshmello' },
			{ categoryName: 'chocolates' },
		]

		const result = getfilteredProducts(products, initialState)

		expect(result).toEqual(finalProducts)
	})
})
