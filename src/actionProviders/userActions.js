import { UserContext } from '../context'
import { useReducer, useContext } from 'react'
import { userReducers } from '../reducers/userReducers'

const UserProvider = props => {
	const [{ userInfo }, dispatch] = useReducer(userReducers, {
		userInfo: {},
	})

	console.log(userInfo)

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
	console.log(userInfo)

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
