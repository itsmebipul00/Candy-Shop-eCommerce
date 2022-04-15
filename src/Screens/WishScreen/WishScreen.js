import './WishScreen.css'
import { useNavigate } from 'react-router-dom'
import { ProductCard } from '../../Components/ProductCard/ProductCard'
import { isEmptyObject } from '../../utils/isEmptyObject'
import { useWishList } from '../../actionProviders/wishListAction'
import { useProducts } from '../../actionProviders/productActions'
import { useCart } from '../../actionProviders/cartActions'
import { useUser } from '../../actionProviders/userActions'

const WishScreen = () => {
	const navigate = useNavigate()

	const { toggleWishListAction, wishList } = useWishList()

	const { filteredProducts } = useProducts()

	const { cartItems, addtoCartAction } = useCart()

	const { userInfo } = useUser()

	const isUserObjEmpty = isEmptyObject(userInfo)

	const addtocartHandler = (e, id) => {
		e.preventDefault()
		if (isUserObjEmpty) {
			navigate('/login')
		} else {
			const cartItem = filteredProducts.find(
				product => product._id === id
			)

			const iteminCart =
				cartItems.findIndex(item => item._id === id) === -1
					? false
					: true

			if (iteminCart) {
				e.preventDefault()
			} else {
				addtoCartAction(cartItem)
				toggleWishListAction(cartItem)
			}
		}
	}

	const addtoWishCheck = product => {
		console.log(product)
		if (isUserObjEmpty) {
			navigate('/login')
		} else {
			toggleWishListAction(product)
		}
	}

	return (
		<div className='wish-screen'>
			{wishList &&
				wishList.length > 0 &&
				wishList.map(p => (
					<ProductCard
						product={p}
						key={p._id}
						_id={p._id}
						addtocartHandler={addtocartHandler}
						image={p.image}
						title={p.title}
						price={p.price}
						rating={p.rating}
						wishList={wishList}
						toggleWishListAction={addtoWishCheck}
					/>
				))}
		</div>
	)
}

export default WishScreen
