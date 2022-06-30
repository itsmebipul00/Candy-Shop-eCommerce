import { useProducts } from '../Providers'


export const usePaginate = (): [number[], React.Dispatch<React.SetStateAction<number>>] => {
	const { products, setthisPage } = useProducts()
	const productsLength = products?.length as number

	const pageNumbers:number[] = []

	for (let i = 1; i <= Math.ceil(productsLength / 8); i++) {
		pageNumbers.push(i)
	}

	return [pageNumbers, setthisPage]
}
