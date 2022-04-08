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
import { useState } from 'react'
// import { UserContext } from '../../context'

import { Pagination } from '../../Components/Pagination/Pagination.js'

const ProductListScreen = () => {
	const navigate = useNavigate()

	const {
		filteredProducts,
		productsLoading,
		productsError,
		products,
	} = useProducts()

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

	const productsPerPage = 10
	const [thispage, setthisPage] = useState(1)

	const lastProduct = thispage * productsPerPage
	const firstProduct = lastProduct - productsPerPage
	const currProducts =
		filteredProducts &&
		filteredProducts.length > 0 &&
		filteredProducts.slice(firstProduct, lastProduct)

	console.log(currProducts, products, lastProduct, firstProduct)

	const paginate = pageNo => {
		setthisPage(pageNo)
		setTimeout(() => navigate(`/products/${pageNo}`))
	}

	// TODO: useContext whereever possible instead of passing these funcions down

	return (
		<div>
			{productsLoading && <Loader />}
			{productsError && <Error />}
			<div className='product-grid products-section-container'>
				{currProducts &&
					currProducts.length > 0 &&
					currProducts.map(p => (
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
			<Pagination
				productsPerPage={productsPerPage}
				paginate={paginate}
				productsLength={products.length}
			/>
		</div>
	)
}

export default ProductListScreen
