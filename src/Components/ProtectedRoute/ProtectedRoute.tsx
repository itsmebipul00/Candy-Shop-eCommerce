import { Outlet, Navigate, useLocation } from 'react-router-dom'

import { useUser } from '../../Providers'

export const ProtectedRoute = () => {
	const location = useLocation()

	const { userInfo } = useUser()

	if (userInfo?.encodedToken)
		return (
			<Navigate to='/products' state={{ from: location }} replace />
		)
	else return <Outlet />
}
