import './WishScreen.css'
import { ProductCard } from '../../Components/ProductCard/ProductCard'
import { useWishList } from '../../actionProviders/wishListAction'
import EmptyBasket from '../../Components/EmptyBasket/EmptyBasket'

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
