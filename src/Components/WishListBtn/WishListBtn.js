import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

import { useWishList } from '../../actionProviders/wishListAction'

export const WishListBtn = props => {
	const { wishList } = useWishList()

	const { toggleWishListAction, product } = props

	const isInWishList =
		wishList && wishList.length > 0
			? wishList.find(item => item._id === props._id)
			: false

	return (
		<button
			onClick={() => toggleWishListAction(product)}
			className='btn-wishlist'>
			{isInWishList ? (
				<AiFillHeart style={{ fontSize: '2rem' }} />
			) : (
				<AiOutlineHeart style={{ fontSize: '2rem' }} />
			)}
		</button>
	)
}
