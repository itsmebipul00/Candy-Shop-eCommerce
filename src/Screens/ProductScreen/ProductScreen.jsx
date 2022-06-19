import './ProductScreen.css'

import { useParams } from 'react-router-dom'

import { useState } from 'react'

import { CartBtn } from '../../Components/CartBtn/CartBtn'

import { WishListBtn } from '../../Components/WishListBtn/WishListBtn'

import { useEffect } from 'react'

import { Rating } from '../../Components/Rating/Rating'

import productService from '../../Services/productServices'

const ProductScreen = () => {
	const { id } = useParams()

	const [product, setProduct] = useState([])

	useEffect(() => {
		;(async () => {
			const res = await productService.getProduct(id)
			setProduct(res.product)
		})()
	}, [id])

	return (
		<div className='product-page'>
			<div className='card  p-relative'>
				<span className='wish-btn p-absolute'>
					<WishListBtn product={product} />
				</span>
				<div className='img-container img-container-width'>
					<img src={product.image} alt='product-img' />
				</div>
				<div className='card-content card-content-width d-flex f-col'>
					<h3 className='card-title fs-600'>{product.title}</h3>
					<div className='card-body letter-spacing-5'>
						<span className='card-rating'>
							<Rating value={product.rating} />
						</span>
						<p className='card-description'>{product.description}</p>
					</div>
					<div className='card-footer'>
						<p className='card__price fs-500'>
							<strong>PRICE: </strong>
							<span className='line-through text-dark-70  original-price'>
								{' '}
								$9999
							</span>
							${product.price}
						</p>
						<CartBtn product={product} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProductScreen
