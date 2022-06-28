import { useProducts } from '../Providers'

export const usePaginate = () => {
	const { products, setthisPage } = useProducts()
	const productsLength = products?.length

	const pageNumbers = []

	for (let i = 1; i <= Math.ceil(productsLength / 8); i++) {
		pageNumbers.push(i)
	}

	return [pageNumbers, setthisPage]
}
