import { isEmptyObject } from '../../utils/isEmptyObject'

import { useUser } from '../../actionProviders/userActions'

import { useLocation, Navigate, useNavigate } from 'react-router-dom'

import './PaymentScreen.css'
import { useAddress } from '../../actionProviders/addressProvider'
import { useCart } from '../../actionProviders/cartActions'
import { CartBtn } from '../../Components/CartBtn/CartBtn'
import { useState, useEffect } from 'react'

import { useOrders } from '../../actionProviders/ordersActions'

import { PayPalButton } from 'react-paypal-button-v2'

import {
	PhLinkSimpleBold,
	TeenyiconsTickCircleOutline,
} from '../../assets/Icons/Logo'

const PaymentScreen = () => {
	const { userInfo } = useUser()

	const isUserInfoEmpty = isEmptyObject(userInfo)

	const { pathname } = useLocation()

	const { deliveryAddress } = useAddress()

	const { cartItems, addtoCartAction, clearCartAction } = useCart()

	const { addOrderAction } = useOrders()

	const addtocartHandler = (e, id) => {
		console.log(id)
		e.preventDefault()
		const cartItem = cartItems.find(product => product._id === id)
		addtoCartAction(cartItem)
	}

	const subtotal = cartItems?.reduce(
		(acc, val) => acc + val.qty * Number(val.price),
		0
	)

	const [cupon, setCupon] = useState('')
	const [cuponApplied, setCuponApplied] = useState(false)

	const applyCandy50 = () => {
		setCupon('CANDY50')
		setTimeout(() => setCuponApplied(true), 1000)
	}

	const checkCupon = () => {
		if (cupon === 'CANDY50') {
			setCuponApplied(true)
		} else {
			setCuponApplied(false)
		}
	}
	console.log(cuponApplied, cupon)

	const [sdkReady, setSdkReady] = useState(false)

	useEffect(() => {
		const addPayPalScript = async () => {
			const script = document.createElement('script')
			script.type = 'text/javascript'
			script.src = `https://www.paypal.com/sdk/js?client-id=${process.env.REACT_APP_CLIENT_ID}`
			script.async = true
			script.onload = () => {
				setSdkReady(true)
			}
			document.body.appendChild(script)
		}
		if (!window.paypal) {
			addPayPalScript()
		} else {
			setSdkReady(true)
		}
	}, [])

	const navigate = useNavigate()

	const paymentSuccessHandler = async paymentResult => {
		if (paymentResult.status === 'COMPLETED') {
			addOrderAction(cartItems)
			clearCartAction()
			navigate('/orders')
		}
	}

	return (
		<div className='d-flex payment-screen'>
			{isUserInfoEmpty && (
				<Navigate to='/login' state={{ from: pathname }} />
			)}
			<div className='delivery-summary'>
				<h2 className='letter-spacing-5 fs-700'>
					Delivery Information
				</h2>
				<div className='delivery-info fs-500'>
					<p>
						<strong className='letter-spacing-5'>Name</strong>:{' '}
						<span>{userInfo?.foundUser?.username}</span>
					</p>
					<p>
						<strong className='letter-spacing-5'>Email</strong>:{' '}
						<span>{userInfo?.foundUser?.email}</span>
					</p>
					<p>
						<strong className='letter-spacing-5'>Mobile</strong>:{' '}
						<span>{deliveryAddress?.mobile}</span>
					</p>
					<p>
						<strong className='letter-spacing-5'>Pincode</strong>:{' '}
						<span>{deliveryAddress?.pincode}</span>
					</p>
					<p>
						<strong className='letter-spacing-5'>Address</strong>:{' '}
						<span>{deliveryAddress?.address}</span>
					</p>
				</div>
				<div className='cartItems'>
					<h2 className='cartItems-heading letter-spacing-5 fs-700'>
						Cart Summary
					</h2>
					{cartItems?.map((item, idx) => (
						<div key={idx} className='cartItem-product d-flex'>
							<div className='cartImg-wrapper'>
								<img
									src={item.image}
									alt='cartItem-img'
									className='cartItem-img'
								/>
							</div>
							<div className='cartItem-info fs-500'>
								<p>{item.title}</p>
								<p>
									Price: ${item.price} x {item.qty} = $
									{item.price * item.qty}
								</p>
								<p>Quatity: {item.qty}</p>
							</div>
							<CartBtn
								_id={item._id}
								addtocartHandler={addtocartHandler}
								className='payment-cart-btn'
							/>
						</div>
					))}
				</div>
			</div>
			<div className='billing-section '>
				<h2>Bill Summary</h2>
				<div className='subtotal-wrapper'>
					{cuponApplied && cupon === 'CANDY50' ? (
						<span>
							<span className='fs-500'>Subtotal:</span>{' '}
							<s>${subtotal}</s>
							<small className='fs-300'>-50% </small>
							<span className='fs-500'>${subtotal * 0.5}</span>
						</span>
					) : (
						<p className='fs-500'>Subtotal : ${subtotal}</p>
					)}
				</div>
				<div className='cupon-input-wrapper'>
					<label htmlFor='cupon-input '>
						<span className='fs-500'>Cupon: </span>
					</label>
					<input
						id='cupon'
						className='cupon-input-feild'
						onChange={e => {
							setCupon(e.target.value)
							setCuponApplied(false)
						}}
						value={cupon}
					/>
				</div>
				<button
					disabled={cupon.length < 1}
					onClick={checkCupon}
					className='btn btn-cupon letter-spacing-5 uppercase fs-300'>
					Apply
				</button>
				<div onClick={applyCandy50} className='cupon-card'>
					{cuponApplied && (
						<TeenyiconsTickCircleOutline
							className='cupon-applied'
							height='1.5rem'
							width='1.5rem'
							stroke='green'
						/>
					)}
					<PhLinkSimpleBold
						className='cupon-svg'
						height='1.5rem'
						width='1.5rem'
					/>
					<span>CANDY50: </span>
					<small>Flat 50% off</small>
				</div>
				<div className='payment-gateway'>
					{sdkReady &&
						(cuponApplied ? (
							<PayPalButton
								amount={subtotal * 0.5}
								onSuccess={paymentSuccessHandler}
							/>
						) : (
							<PayPalButton
								amount={subtotal}
								onSuccess={paymentSuccessHandler}
							/>
						))}
				</div>
			</div>
		</div>
	)
}

export default PaymentScreen
