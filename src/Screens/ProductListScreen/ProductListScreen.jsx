// Components: Search, Pagination
import './ProductListScreen.css'

import { Loader } from '../../Components/Loader/Loader.jsx'

import { Error } from '../../Components/Error/Error.jsx'

import { ProductCard } from '../../Components/ProductCard/ProductCard.jsx'

import { isEmptyObject } from '../../utils/isEmptyObject'

import { useNavigate } from 'react-router-dom'

import { useProducts } from '../../actionProviders/productActions'

import { useCart } from '../../actionProviders/cartActions'

import { useWishList } from '../../actionProviders/wishListAction'

import { useUser } from '../../actionProviders/userActions'

const ProductListScreen = () => {
	const { filteredProducts, productsLoading, productsError } =
		useProducts()

	const navigate = useNavigate()

	const { addtoCartAction, cartItems, updateCartAction } = useCart()

	const { toggleWishListAction, wishList } = useWishList()

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
			}
		}
	}

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
						wishList={wishList}
					/>
				))}
		</div>
	)
}

export default ProductListScreen
