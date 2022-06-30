import './Header.css'
import { useLocation } from 'react-router-dom'
import { LogoProvider } from '../../assets/Icons'
import { styles } from '../../utils/iconStyles'
import { Link, NavLink } from 'react-router-dom'

import { Search } from '../Search/Search'

import {IconBaseProps} from 'react-icons'

import {
	AiOutlineShoppingCart,
	AiOutlineHeart,
	AiOutlineLogin,
} from 'react-icons/ai'

import { GiCandyCanes } from 'react-icons/gi'
import { Filters } from '../Filters/Filters'

import {
	useUser,
	useWishList,
	useCart,
	useAddress,
	useOrders,
} from '../../Providers'

import axios from 'axios'

const logoStyles = {
	...styles,
	className: styles.className.concat(' candy-logo'),
	size: '2rem',
	color: 'red',
} as IconBaseProps

const cartIconStyle = {
	...styles,
	className: styles.className.concat(' cart-icon'),
} as IconBaseProps

const wishlistIconStyle = {
	...styles,
	className: styles.className.concat(' wishlist-icon'),
}as IconBaseProps

const loginIconStyle = {
	...styles,
	className: styles.className.concat(' login-icon'),
}as IconBaseProps

export const Header = () => {
	const { userInfo, logoutUser } = useUser()
	const { clearWishListAction } = useWishList()
	const { clearCartAction } = useCart()
	const { clearAddressAction } = useAddress()
	const { clearOrdersAction } = useOrders()


	const logoutUserHandler = async () => {
		await axios.post('/api/user/logout', {})
		logoutUser()
		clearWishListAction()
		clearCartAction()
		clearAddressAction()
		clearOrdersAction()
	}

	const location = useLocation()

	const isProductListingPage =
		location.pathname === '/products' ? true : false

	const isRegisterPage =
		location.pathname === '/register' ? true : false

	const isLoginPage = location.pathname === '/login' ? true : false

	const { wishList } = useWishList()

	const { cartItems } = useCart()

	const cartQty = cartItems?.reduce((acc, val) => val.qty + acc, 0)

	return (
		<>
			{isRegisterPage ? (
				<></>
			) : isLoginPage ? (
				<></>
			) : (
				<header>
					<div className='candyshop-header d-grid'>
						<div className='d-flex p-relative'>
							<Link to='/' state={{ form: location.pathname }}>
								<LogoProvider>
									<GiCandyCanes {...logoStyles} />
								</LogoProvider>
								<h1 className='fs-600 letter-spacing-5 brand-name'>
									CandyShop
								</h1>
							</Link>

							<div className='header-ctas margin-l-auto d-flex'>
								{!userInfo ? (
									<NavLink
										to='/login'
										state={{ form: location.pathname }}>
										<LogoProvider>
											<AiOutlineLogin {...loginIconStyle} />
										</LogoProvider>
									</NavLink>
								) : (
									<>
										<NavLink
											to='/userInfo'
											state={{ from: location.pathname }}
											className='fs-500 letter-spacing-5 text-blue text-underline'>{`Hi, ${userInfo.foundUser.username}`}</NavLink>
										<NavLink to={location.pathname}>
											<LogoProvider>
												<AiOutlineLogin
													{...loginIconStyle}
													onClick={logoutUserHandler}
												/>
											</LogoProvider>
										</NavLink>
									</>
								)}

								<NavLink
									to='/wishlist'
									className=' wish-icon p-relative'
									state={{ form: location.pathname }}>
									<LogoProvider>
										<AiOutlineHeart {...wishlistIconStyle} />
									</LogoProvider>
									{wishList && wishList?.length > 0 && (
										<span
											data-qty={wishList.length}
											className='notification notification-color-green'></span>
									)}
								</NavLink>

								<NavLink
									to='/cart'
									className=' cart-icon p-relative'
									state={{ form: location.pathname }}>
									<LogoProvider>
										<AiOutlineShoppingCart {...cartIconStyle} />
									</LogoProvider>

									<span style={{display: cartQty===0? 'none': 'block'}}>
										{cartQty && cartQty > 0 &&  (
											<span
												
												data-qty={cartQty}
												className='notification notification-color-green'></span>
										)}
									</span>
								</NavLink>

								{isProductListingPage && <Filters />}
							</div>
						</div>

						{isProductListingPage && <Search />}
					</div>
				</header>
			)}
		</>
	)
}
