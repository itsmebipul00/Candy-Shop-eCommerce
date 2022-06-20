import { UserContext } from '../../Context'
import { useReducer, useContext } from 'react'
import { userReducers } from '../../Reducers/userReducers'

const UserProvider = props => {
	const [{ userInfo }, dispatch] = useReducer(userReducers, {
		userInfo: {},
	})

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

export { useUser, UserProvider }
