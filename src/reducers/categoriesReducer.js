export const categoriesReducer = (
	state = { categories: [] },
	action
) => {
	switch (action.type) {
		case 'CATEGORIES_LOADING_TRUE':
			return { loading: true, categories: [] }
		case 'CATEGORIES_SUCCESS':
			return { loading: false, categories: action.payload }
		case 'CATEGORIES_ERROR':
			return { loading: false, error: action.payload }
		default:
			return state
	}
}
