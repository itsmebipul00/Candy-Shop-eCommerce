import './ProductScreen.css'

import { useNavigate, useParams } from 'react-router-dom'

import { Rating, WishListBtn } from '../../Components'

import { useEffect, useState } from 'react'

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

	const navigate = useNavigate()

	return (
		<div className='product-page'>
			<div className='align-right'>
				<button
					className='btn btn-products-goBack'
					onClick={() => navigate(-1)}>
					Go Back
				</button>
			</div>
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
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProductScreen
