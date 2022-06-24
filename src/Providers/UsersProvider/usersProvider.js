import { UserContext } from '../../Context'
import { useReducer, useContext } from 'react'
import { userReducers } from '../../reducers/userReducers'

const initialUserState = {
	userInfo: {},
}

const UserProvider = props => {
	const [{ userInfo }, dispatch] = useReducer(
		userReducers,
		initialUserState
	)

	const setUserAction = user => {
		dispatch({
			type: 'USER_SUCCESS',
			payload: user,
		})
	}

	const logoutUser = () => {
		dispatch({
			type: 'LOGOUT_USER',
		})
		localStorage.removeItem('userToken')
	}

	return (
		<UserContext.Provider
			value={{
				setUserAction,
				userInfo,
				logoutUser,
			}}>
			{props.children}
		</UserContext.Provider>
	)
}

const useUser = () => useContext(UserContext)

export { useUser, UserProvider, initialUserState }
