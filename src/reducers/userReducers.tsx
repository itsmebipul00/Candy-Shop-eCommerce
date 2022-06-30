import { actionKind } from '../types/action/actionKind.type'
import { User } from '../types/data/user.type'

type State = {
	userInfo?: User,
}

type Action = {
	type: actionKind,
	payload?: User,
}
export const userReducers = (
	state: State = { userInfo: undefined },
	action: Action
) => {
	switch (action.type) {
		case actionKind.UserSuccess:
			return {
				userInfo: action.payload,
			}
		case actionKind.LogoutUser:
			return {
				userInfo: undefined,
			}
		default:
			return state
	}
}
