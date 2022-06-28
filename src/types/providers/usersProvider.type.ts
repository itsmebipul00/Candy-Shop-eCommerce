import {User} from '../data/user.type'

export interface UserContextValue{
    setUserAction: (user: User) => void,
    userInfo?: User,
    logoutUser: () => void,
}