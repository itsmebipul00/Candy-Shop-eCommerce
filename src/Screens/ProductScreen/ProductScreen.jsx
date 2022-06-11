import './ProductScreen.css'

import { useNavigate, useParams } from 'react-router-dom'

import { useReducer } from 'react'

import { productReducer } from '../../reducers/productReducer'

import axios from 'axios'

import { CartBtn } from '../../Components/CartBtn/CartBtn'

import { WishListBtn } from '../../Components/WishListBtn/WishListBtn'

import { useEffect } from 'react'

import { Rating } from '../../Components/Rating/Rating'

import { isEmptyObject } from '../../utils/isEmptyObject'

import { useUser } from '../../actionProviders/userActions'

import { useProducts } from '../../actionProviders/productActions'

import { useCart } from '../../actionProviders/cartActions'
import { useWishList } from '../../actionProviders/wishListAction'

const ProductScreen = () => {
	const { id } = useParams()

	const { filteredProducts } = useProducts()

	const { addtoCartAction } = useCart()

	const { toggleWishListAction } = useWishList()

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

	const { userInfo } = useUser()

	const navigate = useNavigate()

	const isUserObjEmpty = isEmptyObject(userInfo)

	const addtocartHandler = (e, id) => {
		e.preventDefault()
		if (isUserObjEmpty) {
			navigate('/login')
		} else {
			const cartItem = filteredProducts.find(
				product => product._id === id
			)
			addtoCartAction(cartItem)
		}
	}

	const addtoWishCheck = product => {
		if (isUserObjEmpty) {
			navigate('/login')
		} else {
			toggleWishListAction(product)
		}
	}

	return (
		<div className='product-page'>
			<div class='card  p-relative'>
				<span className='wish-btn p-absolute'>
					<WishListBtn
						toggleWishListAction={addtoWishCheck}
						product={product}
						_id={product._id}
					/>
				</span>
				<div class='img-container img-container-width'>
					<img src={product.image} alt='' />
				</div>
				<div class='card-content card-content-width d-flex f-col'>
					<h3 class='card-title fs-600'>{product.title}</h3>
					<div class='card-body letter-spacing-5'>
						<span class='card-rating'>
							<Rating value={product.rating} />
						</span>
						<p class='card-description'>{product.description}</p>
					</div>
					<div class='card-footer'>
						<p class='card__price fs-500'>
							<strong>PRICE: </strong>
							<span class='line-through text-dark-70  original-price'>
								{' '}
								$9999
							</span>
							${product.price}
						</p>
						<CartBtn
							_id={product._id}
							addtocartHandler={addtocartHandler}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProductScreen
