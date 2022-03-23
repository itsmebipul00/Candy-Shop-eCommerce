// Components: Search, Pagination
import './ProductListScreen.css'
import { useContext } from 'react'
import { Loader } from '../../Components/Loader/Loader.jsx'
import { Error } from '../../Components/Error/Error.jsx'
import { ProductCard } from '../../Components/ProductCard/ProductCard.jsx'
import { ProductsContext } from '../../context'

const ProductListScreen = () => {
	const {
		filteredProducts,
		products,
		// filterData,
		productsLoading,
		productsError,
		toggleWish,
		// wishList,
	} = useContext(ProductsContext)

	const addtocartHandler = (e, id) => {
		e.preventDefault()
	}

	// console.log(filterData)

	// console.log(Object.keys(filters).map())

	// let filteredProducts = products
	// console.log(filterData)

	// if(Object.keys(filterData).map(category => category === ))

	//  FilterProducts(filterData, products)

	// const getSortedProducts = (filterData, products) => {

	// }

	// console.log(getSortedProducts(filterData, products))

	//  const sorted = getSortedProducts(filterData, products);

	//  console.log(sorted.filter(p => p.rating < 5).sort((a,b) => b['rating'] - a['rating']))
	// const a = getSortedProducts(filterData, products)
	// let sortedProducts = products

	// console.log(sortedProducts)

	// const sortProducts = (filterData, sortedProducts) => {
	// 	// console.log(filteredProducts)

	// 	if (
	// 		sortedProducts &&
	// 		filterData &&
	// 		filterData.sort === 'price-high-to-low'
	// 	) {
	// 		return sortedProducts.sort((a, b) => b['price'] - a['price'])
	// 	}

	// 	if (
	// 		sortedProducts &&
	// 		filterData &&
	// 		filterData.sort === 'price-low-to-high'
	// 	) {
	// 		return sortedProducts.sort((a, b) => a['price'] - b['price'])
	// 	}

	// 	if (
	// 		sortedProducts &&
	// 		filterData &&
	// 		filterData.sort === 'rating-high-to-low'
	// 	) {
	// 		return sortedProducts.sort((a, b) => b['rating'] - a['rating'])
	// 	}

	// 	if (
	// 		sortedProducts &&
	// 		filterData &&
	// 		filterData.sort === 'rating-low-to-high'
	// 	) {
	// 		return sortedProducts.sort((a, b) => a['rating'] - b['rating'])
	// 	}

	// 	if (
	// 		sortedProducts &&
	// 		filterData &&
	// 		filterData.rating === 'four-stars'
	// 	) {
	// 		return sortedProducts.filter(p => p.rating >= 4)
	// 	}

	// 	if (
	// 		sortedProducts &&
	// 		filterData &&
	// 		filterData.rating === 'three-stars'
	// 	) {
	// 		return sortedProducts.filter(p => p.rating >= 3)
	// 	}

	// 	if (
	// 		sortedProducts &&
	// 		filterData &&
	// 		filterData.rating === 'two-stars'
	// 	) {
	// 		return sortedProducts.filter(p => p.rating >= 2)
	// 	}

	// 	if (
	// 		sortedProducts &&
	// 		filterData &&
	// 		filterData.rating === 'one-star'
	// 	) {
	// 		return sortedProducts.filter(p => p.rating >= 1)
	// 	}
	// }

	// const finalProducts = sortProducts(filterData, sortedProducts)

	// console.log(finalProducts)

	// const filterWithRatings = (filterData, sortProducted, products) => {
	// 	let filteredProducts = !sortProducted ? products : sortProducted
	// 	// console.log(filteredProducts)

	// }

	// const sortProducted = sortProducts(
	// 	filterData,
	// 	products,
	// 	filteredProducts
	// )

	// const filteredProducts = filterWithRatings(
	// 	filterData,
	// 	products,
	// 	sortProducted
	// )

	// const finalProducts = !sortProducted
	// 	? filteredProducts
	// 	: !filteredProducts
	// 	? sortProducted
	// 	: products

	// const filteredProducts = filterWithRatings()

	// const sortedData =  getSortedProducts(filterData, products);

	// if (sorted)
	// console.log(sorted.filter(p => p.rating<= 4))

	// const b = filterWithRatings(filterData, products)

	// console.log(a, b)
	// sortedData()

	// const getFilteredData = (filterData, sortedData) => {

	//   const categories = sortedData.map(data => data.categoryName)
	//   const ratings=   sortedData.map(data => data.rating)

	//   const totalCategories=   Object.keys(filterData).map(p => p)

	// console.log(filterData, categories, totalCategories, ratings)
	// }

	// getFilteredData(filterData, sortedData)
	// const filteredData = getFilteredData(filterData, sortedData)

	// const filteredData = getFilteredData(sortedData, {
	//   showFastDeliveryOnly,
	//   showInventoryAll
	// });
	// console.log(products)
	return (
		<div className='product-grid products-section-container'>
			{productsLoading && <Loader />}
			{productsError && <Error />}

			{filteredProducts &&
				filteredProducts.length > 0 &&
				filteredProducts.map(p => (
					<ProductCard
						key={p._id}
						id={p.id}
						addtocartHandler={addtocartHandler}
						image={p.image}
						title={p.title}
						price={p.price}
						rating={p.rating}
						toggleWish={toggleWish}
						wishList={p.wishList}
					/>
				))}
		</div>
	)
}

export default ProductListScreen
