// Componets: Wishlist, UserInfo, OrderHisttory
import './ProfileScreen.css'
import { useContext } from 'react'
import {
	FaAddressCard,
	FaUser,
	FaShoppingCart,
	FaHeartbeat,
} from 'react-icons/fa'

import {
	Navigate,
	NavLink,
	Outlet,
	useLocation,
} from 'react-router-dom'
import { UserContext } from '../../context'
import { isEmptyObject } from '../../utils/isEmptyObject'

// Protected Route

const ProfileScreen = () => {
	const { pathname } = useLocation()

	const { userInfo } = useContext(UserContext)

	const isUserInfoEmpty = isEmptyObject(userInfo)

	const size = '1.5rem'
	return (
		<>
			{isUserInfoEmpty && (
				<Navigate to='/login' state={{ from: pathname }} />
			)}
			<div className='user-profile d-flex'>
				<ul className='d-grid profile-lists'>
					<li
						className={`profile-list-item ${
							pathname === '/userInfo' && 'active-list'
						}`}>
						<NavLink
							to='/userInfo'
							className='profiles-link uppercase'
							state={{ form: pathname }}>
							<FaUser size={size} />
							<span className='text  fs-400 '>User Profile</span>
						</NavLink>
					</li>
					<li
						className={`profile-list-item ${
							pathname === '/address' && 'active-list'
						}`}>
						<NavLink
							to='/address'
							className='profiles-link uppercase'
							state={{ form: pathname }}>
							<FaAddressCard size={size} />
							<span className='text  fs-400 '>Manage Address</span>
						</NavLink>
					</li>
					<li
						className={`profile-list-item ${
							pathname === '/cart' && 'active-list'
						}`}>
						<NavLink
							to='/cart'
							className='profiles-link uppercase'
							state={{ form: pathname }}>
							<FaShoppingCart size={size} />
							<span className='text  fs-400 '>Cart Items</span>
						</NavLink>
					</li>
					<li
						className={`profile-list-item ${
							pathname === '/wishlist' && 'active-list'
						}`}>
						<NavLink
							to='/wishlist'
							className='profiles-link uppercase'
							state={{ form: pathname }}>
							<FaHeartbeat size={size} />
							<span className='text  fs-400 '>WishList</span>
						</NavLink>
					</li>
				</ul>
				<section className='all-profile-screens'>
					<Outlet />
				</section>
			</div>
		</>
	)
}

export default ProfileScreen
