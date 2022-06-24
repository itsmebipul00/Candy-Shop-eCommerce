import { getSortedData } from '../../utils/filters'

const products = [
	{ categoryName: 'marshmello', price: 500, rating: 4 },
	{ categoryName: 'chocolates', price: 650, rating: 5 },
	{ categoryName: 'jellies', price: 400, rating: 4.5 },
	{ categoryName: 'lollipops', price: 350, rating: 3 },
]

describe('testing products sortedProducts', () => {
	it('should return price-sorted products', () => {
		const finalProducts = [
			{ categoryName: 'chocolates', price: 650, rating: 5 },
			{ categoryName: 'marshmello', price: 500, rating: 4 },
			{ categoryName: 'jellies', price: 400, rating: 4.5 },
			{ categoryName: 'lollipops', price: 350, rating: 3 },
		]

		const state = { sort: 'price-high-to-low' }

		const result = getSortedData(products, state)

		expect(result).toEqual(finalProducts)
	})
	it('should return rating-sorted products', () => {
		const finalProducts = [
			{ categoryName: 'chocolates', price: 650, rating: 5 },
			{ categoryName: 'jellies', price: 400, rating: 4.5 },
			{ categoryName: 'marshmello', price: 500, rating: 4 },
			{ categoryName: 'lollipops', price: 350, rating: 3 },
		]

		const state = { sort: 'rating-high-to-low' }

		const result = getSortedData(products, state)

		expect(result).toEqual(finalProducts)
	})
})
