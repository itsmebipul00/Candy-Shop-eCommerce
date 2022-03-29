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
import { useState } from 'react/cjs/react.production.min'
// import { UserContext } from '../../context'

const ProductListScreen = () => {
	const { filteredProducts, productsLoading, productsError } =
		useContext(ProductsContext)

	// const [btntoGotoCart, setBtntoGotoCart] = useState('Add to cart')

	const navigate = useNavigate()

	const { addtoCartAction, cartItems, updateCartAction } =
		useContext(CartContext)

	console.log(cartItems)
	const { toggleWishListAction } = useContext(WishListContext)

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
			}
		}
	}

	console.log(cartItems)
	// const cId = cartItems.map(c => c._id)
	// // console.log()
	// const fId = filteredProducts.map(f => f._id)
	// console.log(fId.includes(cId))

	const updateCartHandler = (e, id) => {
		e.preventDefault()
		const { value } = e.target
		updateCartAction(value, id, e)
	}

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
						toggleWishListAction={toggleWishListAction}
						cartItems={cartItems}
					/>
				))}
		</div>
	)
}

export default ProductListScreen
