import { userReducers } from '../../reducers/userReducers'
import { initialUserState } from '../../Providers/UsersProvider/usersProvider'

describe('testing usersReducer', () => {
	it('should update users state', () => {
		const result = userReducers(initialUserState, {
			type: 'USER_SUCCESS',
			payload: { username: 'bipul' },
		})

		const finalState = {
			userInfo: { username: 'bipul' },
		}

		expect(result).toEqual(finalState)
	})
	it('should clear userInfo', () => {
		const initialState = {
			userInfo: { usernmae: 'bipul' },
		}
		const result = userReducers(initialState, {
			type: 'LOGOUT_USER',
		})

		const finalState = {
			userInfo: {},
		}

		expect(result).toEqual(finalState)
	})
})
