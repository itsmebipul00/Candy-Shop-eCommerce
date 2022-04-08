// Components: Search, Pagination
import './ProductListScreen.css'
import { useContext } from 'react'
import { Loader } from '../../Components/Loader/Loader.jsx'
import { Error } from '../../Components/Error/Error.jsx'
import { ProductCard } from '../../Components/ProductCard/ProductCard.jsx'
import {
	CartContext,
	ProductsContext,
	UserContext,
	WishListContext,
} from '../../context'
import { isEmptyObject } from '../../utils/isEmptyObject'
import { useNavigate } from 'react-router-dom'
// import { UserContext } from '../../context'

const ProductListScreen = () => {
	const { filteredProducts, productsLoading, productsError } =
		useContext(ProductsContext)

	const navigate = useNavigate()

	const { addtoCartAction, cartItems, updateCartAction } =
		useContext(CartContext)

	const { toggleWishListAction, wishList } =
		useContext(WishListContext)

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
			addtoCartAction(cartItem)
		}
	}

	const updateCartHandler = (e, id) => {
		e.preventDefault()
		const { value } = e.target
		updateCartAction(value, id, e)
	}

	const addtoWishCheck = product => {
		if (isUserObjEmpty) {
			navigate('/login')
		} else {
			toggleWishListAction(product)
		}
	}

	// TODO: useContext whereever possible instead of passing these funcions down

	return (
		<div className='product-grid products-section-container'>
			{productsLoading && <Loader />}
			{productsError && <Error />}

			{filteredProducts &&
				filteredProducts.length > 0 &&
				filteredProducts.map(p => (
					<ProductCard
						key={p.id}
						_id={p._id}
						addtocartHandler={addtocartHandler}
						updateCartHandler={updateCartHandler}
						image={p.image}
						title={p.title}
						price={p.price}
						rating={p.rating}
						toggleWishListAction={addtoWishCheck}
						cartItems={cartItems}
						wishList={wishList}
					/>
				))}
		</div>
	)
}

export default ProductListScreen
