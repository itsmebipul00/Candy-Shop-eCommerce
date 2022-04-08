import './ProductScreen.css'

import { useParams } from 'react-router-dom'

import { useReducer } from 'react'

import { productReducer } from '../../reducers/productReducer'

import axios from 'axios'

import { useEffect } from 'react'

const ProductScreen = () => {
	const { id } = useParams()

	const [{ product }, dispatch] = useReducer(productReducer, {
		product: {},
	})

	const setProduct = data => {
		dispatch({
			type: 'SUCCESS_PRODUCT',
			payload: data,
		})
	}

	const errorMessage = data => {
		dispatch({
			type: 'PRODUCT_ERROR',
			payload: data,
		})
	}

	const getProduct = async () => {
		try {
			const res = await axios.get(`/api/products/${id}`)
			setProduct(res.data.product)
		} catch (error) {
			errorMessage(error.message)
		}
	}

	useEffect(() => {
		getProduct(id)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	console.log(product)

	return <div className='product-page'>PRODUCT PAGE</div>
}

export default ProductScreen
