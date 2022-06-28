import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

import { useCart, useUser, useWishList } from '../../Providers'

export const WishListBtn = props => {
	const { product } = props

	const navigate = useNavigate()

	const { wishList, toggleWishListAction } = useWishList()

	const { cartItems, removeFromCartAction } = useCart()

	const { userInfo } = useUser()

	const addtoWishCheck = product => {
		if (!userInfo.encodedToken) {
			navigate('/login')
			return
		}
		const wishInCart = cartItems?.find(pro => pro._id === product._id)
		if (Boolean(wishInCart)) {
			removeFromCartAction(wishInCart._id)
		}
		toggleWishListAction(product)
	}

	const isInWishList =
		wishList && wishList.length > 0
			? wishList.find(item => item._id === product._id)
			: false

	return (
		<button
			onClick={() => addtoWishCheck(product)}
			className='btn-wishlist'>
			{isInWishList ? (
				<AiFillHeart
					style={{ color: 'hsl(338, 81%, 41%)', fontSize: '2rem' }}
				/>
			) : (
				<AiOutlineHeart style={{ fontSize: '2rem' }} />
			)}
		</button>
	)
}
