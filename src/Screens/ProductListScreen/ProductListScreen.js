import './ProductListScreen.css'

import { useProducts } from '../../Providers'

import {
	Pagination,
	ScrollToTop,
	ProductCard,
	EmptyBasket,
} from '../../Components'

const ProductListScreen = () => {
	const { filteredProducts } = useProducts()

	return (
		<div>
			<ScrollToTop>
				<div className='product-grid products-section-container'>
					{filteredProducts && filteredProducts.length > 0 ? (
						filteredProducts.map((p, idx) => (
							<ProductCard product={p} key={idx} />
						))
					) : (
						<div className='no-products'>
							<EmptyBasket basket='filteredProducts' />
						</div>
					)}
				</div>
			</ScrollToTop>
			<Pagination />
		</div>
	)
}

export default ProductListScreen
