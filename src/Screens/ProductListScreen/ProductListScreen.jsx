// Components: Search, Pagination
import './ProductListScreen.css'
import { useContext } from 'react'
import { Loader } from '../../Components/Loader/Loader.jsx'
import { Error } from '../../Components/Error/Error.jsx'
import { ProductCard } from '../../Components/ProductCard/ProductCard.jsx'
import { ProductsContext, WishListContext } from '../../context'
// import { UserContext } from '../../context'

const ProductListScreen = () => {
	const { filteredProducts, productsLoading, productsError } =
		useContext(ProductsContext)

	const addtocartHandler = (e, id) => {
		e.preventDefault()
	}

	const { toggleWishListAction } = useContext(WishListContext)

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
						image={p.image}
						title={p.title}
						price={p.price}
						rating={p.rating}
						toggleWishListAction={toggleWishListAction}
					/>
				))}
		</div>
	)
}

export default ProductListScreen
