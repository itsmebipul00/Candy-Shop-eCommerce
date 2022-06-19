import './ProfileScreen.css'

import {
	FaAddressCard,
	FaUser,
	FaShoppingCart,
	FaHeartbeat,
} from 'react-icons/fa'

import { NavLink, Outlet, useLocation } from 'react-router-dom'

import { ZondiconsLocationShopping } from '../../assets/Logo'

const ProfileScreen = () => {
	const { pathname } = useLocation()

	const size = '1.5rem'
	return (
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

				<li
					className={`profile-list-item ${
						pathname === '/orders' && 'active-list'
					}`}>
					<NavLink
						to='/orders'
						className='profiles-link uppercase'
						state={{ form: pathname }}>
						<ZondiconsLocationShopping
							height='1.5rem'
							width='1.5rem'
						/>
						<span className='text  fs-400 '>Orders</span>
					</NavLink>
				</li>
			</ul>

			<section className='all-profile-screens'>
				<Outlet />
			</section>
		</div>
	)
}

export default ProfileScreen
