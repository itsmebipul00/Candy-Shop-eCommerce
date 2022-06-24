export const userReducers = (state = { userInfo: {} }, action) => {
	switch (action.type) {
		case 'USER_SUCCESS':
			console.log(action.payload)
			return {
				userInfo: action.payload,
			}
		case 'LOGOUT_USER':
			return {
				userInfo: {},
			}
		default:
			return state
	}
}
