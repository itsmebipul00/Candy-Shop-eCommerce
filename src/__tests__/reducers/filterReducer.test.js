import { filterReducer } from '../../reducers/filterReducer'

const initialFilterState = {
	marshmello: false,
	sort: '',
	minPriceVal: 0,
	maxPriceVal: 500,
}

describe('testing filterReducer', () => {
	it('should update filter state', () => {
		const result = filterReducer(initialFilterState, {
			type: 'FILTER_CATEGORIES',
			feild: 'marshmello',
			payload: true,
		})

		const finalState = {
			marshmello: true,
			sort: '',
			minPriceVal: 0,
			maxPriceVal: 500,
		}

		expect(result).toEqual(finalState)
	})
	it('should update sort state', () => {
		const result = filterReducer(initialFilterState, {
			type: 'HANDLE_SORT',
			feild: 'sort',
			payload: 'price-high-to-low',
		})

		const finalState = {
			marshmello: false,
			sort: 'price-high-to-low',
			minPriceVal: 0,
			maxPriceVal: 500,
		}

		expect(result).toEqual(finalState)
	})
	it('should update price state', () => {
		const result = filterReducer(initialFilterState, {
			type: 'FILTER_PRICES',
			minPrice: 10,
			maxPrice: 250,
		})

		const finalState = {
			marshmello: false,
			sort: '',
			minPriceVal: 10,
			maxPriceVal: 250,
		}

		expect(result).toEqual(finalState)
	})
})
