import './WishScreen.css'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import {
	CartContext,
	ProductsContext,
	WishListContext,
	UserContext,
} from '../../context'
import { ProductCard } from '../../Components/ProductCard/ProductCard'
import { isEmptyObject } from '../../utils/isEmptyObject'

const WishScreen = () => {
	const navigate = useNavigate()

	const { toggleWishListAction, wishList } =
		useContext(WishListContext)

	const { filteredProducts } = useContext(ProductsContext)

	const { cartItems, addtoCartAction } = useContext(CartContext)

	const { userInfo } = useContext(UserContext)

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

	return (
		<div className='wish-screen'>
			{wishList &&
				wishList.length > 0 &&
				wishList.map(p => (
					<ProductCard
						key={p._id}
						_id={p._id}
						addtocartHandler={addtocartHandler}
						image={p.image}
						title={p.title}
						price={p.price}
						rating={p.rating}
						wishList={wishList}
						toggleWishListAction={toggleWishListAction}
					/>
				))}
		</div>
	)
}

export default WishScreen
