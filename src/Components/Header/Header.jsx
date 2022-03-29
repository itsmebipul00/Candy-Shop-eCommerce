import './Header.css'
import { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { LogoProvider } from '../../assets/Icons/Icons'
import { styles } from '../../utils/iconStyles'
import { Link, NavLink } from 'react-router-dom'

import {
	AiOutlineShoppingCart,
	AiOutlineSearch,
	AiOutlineHeart,
	AiOutlineLogin,
} from 'react-icons/ai'

import { GiCandyCanes } from 'react-icons/gi'
import { Filters } from '../Filters/Filters'
import {
	CartContext,
	UserContext,
	WishListContext,
} from '../../context'
import { isEmptyObject } from '../../utils/isEmptyObject'

const logoStyles = {
	...styles,
	className: styles.className.concat(' candy-logo'),
	size: '2rem',
	color: 'red',
}

const searchIconStyle = {
	...styles,
	className: styles.className.concat(' search-icon'),
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
	const { userInfo, logoutUser } = useContext(UserContext)
	const { clearWishListAction } = useContext(WishListContext)
	const { clearCartAction } = useContext(CartContext)

	const logoutUserHandler = () => {
		logoutUser()
		clearWishListAction()
		clearCartAction()
	}

	const isUserInfoEmpty = isEmptyObject(userInfo)

	const location = useLocation()

	const isProductListingPage =
		location.pathname === '/products' ? true : false

	const isRegisterPage =
		location.pathname === '/register' ? true : false

	const isLoginPage = location.pathname === '/login' ? true : false

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
									state={{ form: location.pathname }}>
									<LogoProvider>
										<AiOutlineHeart value={wishlistIconStyle} />
									</LogoProvider>
								</NavLink>

								<NavLink
									to='/cart'
									state={{ form: location.pathname }}>
									<LogoProvider>
										<AiOutlineShoppingCart value={cartIconStyle} />
									</LogoProvider>
								</NavLink>

								{isProductListingPage && <Filters />}
							</div>
						</div>

						{isProductListingPage && (
							<div className='search-candies p-relative'>
								<label className='sr-only' htmlFor='input-search' />

								<input
									id='input-search'
									className='input-search'
									placeholder='Search for candies...'
								/>

								<LogoProvider>
									<AiOutlineSearch value={searchIconStyle} />
								</LogoProvider>
							</div>
						)}
					</div>
				</header>
			)}
		</>
	)
}
