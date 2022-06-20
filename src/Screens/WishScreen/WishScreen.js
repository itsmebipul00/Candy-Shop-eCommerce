import './WishScreen.css'
import { ProductCard, EmptyBasket } from '../../Components'
import { useWishList } from '../../Providers'

const WishScreen = () => {
	const { wishList } = useWishList()

	return (
		<div className='wish-screen'>
			{wishList && wishList.length > 0 ? (
				<div>
					{wishList.map(p => (
						<ProductCard product={p} />
					))}
				</div>
			) : (
				<EmptyBasket basket='wishlist' />
			)}
		</div>
	)
}

export default WishScreen
