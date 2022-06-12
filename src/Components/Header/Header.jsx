import './Header.css'
import { useLocation } from 'react-router-dom'
import { LogoProvider } from '../../assets/Icons/Icons'
import { styles } from '../../utils/iconStyles'
import { Link, NavLink } from 'react-router-dom'

import { Search } from '../Search/Search'

import {
	AiOutlineShoppingCart,
	AiOutlineHeart,
	AiOutlineLogin,
} from 'react-icons/ai'

import { GiCandyCanes } from 'react-icons/gi'
import { Filters } from '../Filters/Filters'

import { isEmptyObject } from '../../utils/isEmptyObject'
import { useUser } from '../../actionProviders/userActions'
import { useWishList } from '../../actionProviders/wishListAction'
import { useCart } from '../../actionProviders/cartActions'
import { useAddress } from '../../actionProviders/addressProvider'
import { useOrders } from '../../actionProviders/ordersActions'
import { useProducts } from '../../actionProviders/productActions'
import axios from 'axios'

const logoStyles = {
	...styles,
	className: styles.className.concat(' candy-logo'),
	size: '2rem',
	color: 'red',
}

const cartIconStyle = {
	...styles,
	className: styles.className.concat(' cart-icon'),
}

const wishlistIconStyle = {
	...styles,
	className: styles.className.concat(' wishlist-icon'),
}

const loginIconStyle = {
	...styles,
	className: styles.className.concat(' login-icon'),
}

export const Header = () => {
	const { userInfo, logoutUser } = useUser()
	const { clearWishListAction } = useWishList()
	const { clearCartAction } = useCart()
	const { clearAddressAction } = useAddress()
	const { clearOrdersAction } = useOrders()

	const config = {
		headers: {
			authorization: localStorage.getItem('userToken'),
		},
	}
	const logoutUserHandler = async () => {
		await axios.post('/api/user/logout', {}, config)
		logoutUser()
		clearWishListAction()
		clearCartAction()
		clearAddressAction()
		clearOrdersAction()
	}

	const isUserInfoEmpty = isEmptyObject(userInfo)

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
									<GiCandyCanes value={logoStyles} />
								</LogoProvider>
							</Link>

							<h1 className='fs-600 letter-spacing-5 brand-name'>
								CandyShop
							</h1>

							<div className='header-ctas margin-l-auto d-flex'>
								{isUserInfoEmpty ? (
									<NavLink
										to='/login'
										state={{ form: location.pathname }}>
										<LogoProvider>
											<AiOutlineLogin value={loginIconStyle} />
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
													value={loginIconStyle}
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
										<AiOutlineHeart value={wishlistIconStyle} />
									</LogoProvider>
									{wishList?.length > 0 && (
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
										<AiOutlineShoppingCart value={cartIconStyle} />
									</LogoProvider>
									{cartQty > 0 && (
										<span
											data-qty={cartQty}
											className='notification notification-color-green'></span>
									)}
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
