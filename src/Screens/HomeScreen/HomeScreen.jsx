// Componets: Search
import './HomeScreen.css'

import { ProductsContext } from '../../context'

import { useContext, useState, useEffect } from 'react'

const HomeScreen = () => {
	const { categories, filteredProducts } = useContext(ProductsContext)

	console.log(categories, filteredProducts)

	// const [currentProduct, setCurrentProduct] = useState({})

	// const [r, setR] = useState()

	// setR(filteredProducts)

	// console.log(r)

	// if (filteredProducts) {
	// 	let randomProduct =
	// 		filteredProducts[
	// 			Math.floor(Math.random() * filteredProducts.length)
	// 		]

	// 	console.log(randomProduct)
	// }

	// useEffect(() => {
	// 	if (filteredProducts && filteredProducts.length > 0) {
	// 		const randomProduct =
	// filteredProducts[
	// 	Math.floor(Math.random() * filteredProducts.length)
	// ]

	// 		const prodInterval = setInterval(() => {
	// 			setCurrentProduct(randomProduct)
	// 		}, 1000)

	// 		return () => clearInterval(prodInterval)
	// 	}

	// 	// eslint-disable-next-line react-hooks/exhaustive-deps
	// }, [])

	// console.log(
	// 	filteredProducts[
	// 		Math.floor(Math.random() * filteredProducts.length)
	// 	]
	// )

	// console.log(currentProduct)

	return (
		<div className='homescreen'>
			<></>
		</div>
	)
}

export default HomeScreen
