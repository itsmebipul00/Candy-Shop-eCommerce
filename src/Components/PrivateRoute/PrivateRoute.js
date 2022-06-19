import { Outlet, Navigate, useLocation } from 'react-router-dom'

import { useUser } from '../../actionProviders/userActions'

export const PrivateRoute = () => {
	const location = useLocation()

	const { userInfo } = useUser()

	if (userInfo.encodedToken) return <Outlet />
	else
		return <Navigate to='/login' state={{ from: location }} replace />
}
