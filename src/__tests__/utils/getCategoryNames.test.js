import { getCategoryNames } from '../../utils/filters'

describe('testing category names', () => {
	it('should return products according to category names', () => {
		const initialState = [
			{ categoryName: 'marshmello' },
			{ categoryName: 'chocolates' },
			{ categoryName: 'jellies' },
			{ categoryName: 'lollipops' },
		]

		const finalState = {
			marshmello: false,
			chocolates: false,
			jellies: false,
			lollipops: false,
		}

		const result = getCategoryNames(initialState)

		expect(result).toEqual(finalState)
	})
})
