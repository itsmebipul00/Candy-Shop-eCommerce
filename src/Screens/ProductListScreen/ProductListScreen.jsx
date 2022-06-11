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

import { Pagination } from '../../Components/Pagination/Pagination.js'

const ProductListScreen = () => {
	const navigate = useNavigate()

	const {
		filteredProducts,
		productsLoading,
		productsError,
		productsPerPage,
		setthisPage,
		products,
	} = useProducts()

	const { addtoCartAction, cartItems, removeFromCartAction } =
		useCart()

	const { toggleWishListAction, wishList } = useWishList()

	const { userInfo } = useUser()

	const isUserObjEmpty = isEmptyObject(userInfo)

	const addtocartHandler = (e, id) => {
		e.preventDefault()

		const cartInWish = wishList.find(pro => pro._id === id)

		if (Boolean(cartInWish)) {
			toggleWishListAction(cartInWish)
		}
		if (isUserObjEmpty) {
			navigate('/login')
		} else {
			const cartItem = filteredProducts.find(
				product => product._id === id
			)
			addtoCartAction(cartItem)
		}
	}

	const addtoWishCheck = product => {
		const wishInCart = cartItems.find(pro => pro._id === product._id)

		if (Boolean(wishInCart)) {
			removeFromCartAction(wishInCart._id)
		}

		if (isUserObjEmpty) {
			navigate('/login')
		} else {
			toggleWishListAction(product)
		}
	}

	const paginate = pageNo => {
		setthisPage(pageNo)
	}

	// TODO: useContext whereever possible instead of passing these funcions down

	return (
		<div>
			{productsLoading && <Loader />}
			{productsError && <Error />}
			<div className='product-grid products-section-container'>
				{filteredProducts &&
					filteredProducts.length > 0 &&
					filteredProducts.map(p => (
						<ProductCard
							product={p}
							key={p.id}
							_id={p._id}
							addtocartHandler={addtocartHandler}
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
			<Pagination
				productsPerPage={productsPerPage}
				paginate={paginate}
				productsLength={products.length}
			/>
		</div>
	)
}

export default ProductListScreen
