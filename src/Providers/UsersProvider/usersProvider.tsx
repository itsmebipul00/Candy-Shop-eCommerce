import { UserContext } from '../../Context'
import React, { useReducer, useContext } from 'react'
import { userReducers } from '../../reducers/userReducers'

import {actionKind} from '../../types/action/actionKind.type'
import {User} from '../../types/data/user.type'
import { UserContextValue } from '../../types/providers/usersProvider.type'

const initialUserState = {
	userInfo: undefined,
}

type State={
	userInfo?: User
}

type Action={
	type: actionKind,
	payload?: User
}

const UserProvider = (props:React.PropsWithChildren<{}>) => {
	const [state, dispatch] = useReducer<React.Reducer<State, Action>>(
		userReducers,
		initialUserState
	)

	const userInfo: User|undefined= state?.userInfo

	const setUserAction = (user:User )=> {
		dispatch({
			type: actionKind.UserSuccess,
			payload: user,
		})
	}

	const logoutUser = () => {
		dispatch({
			type: actionKind.LogoutUser,
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

const useUser = () => useContext(UserContext) as UserContextValue

export { useUser, UserProvider, initialUserState }
