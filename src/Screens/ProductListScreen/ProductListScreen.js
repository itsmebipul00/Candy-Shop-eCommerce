import './ProductListScreen.css'

import { useProducts } from '../../Providers'

import {
	Pagination,
	ScrollToTop,
	ProductCard,
} from '../../Components'

const ProductListScreen = () => {
	const { filteredProducts } = useProducts()

	return (
		<div>
			<ScrollToTop>
				<div className='product-grid products-section-container'>
					{filteredProducts &&
						filteredProducts.length > 0 &&
						filteredProducts.map((p, idx) => (
							<ProductCard product={p} key={idx} />
						))}
				</div>
			</ScrollToTop>
			<Pagination />
		</div>
	)
}

export default ProductListScreen
