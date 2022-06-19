import './ProductListScreen.css'

import { ProductCard } from '../../Components/ProductCard/ProductCard.jsx'

import { useProducts } from '../../actionProviders/productActions'

import { Pagination } from '../../Components/Pagination/Pagination.js'

const ProductListScreen = () => {
	const { filteredProducts } = useProducts()

	return (
		<div>
			<div className='product-grid products-section-container'>
				{filteredProducts &&
					filteredProducts.length > 0 &&
					filteredProducts.map((p, idx) => (
						<ProductCard product={p} key={idx} />
					))}
			</div>
			<Pagination />
		</div>
	)
}

export default ProductListScreen
