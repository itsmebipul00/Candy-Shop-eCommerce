import { useNavigate } from 'react-router-dom'

import './PaymentScreen.css'
import { CartBtn, ScrollToTop } from '../../Components'

import { useCupon } from '../../Hooks/useCupon'

import {
	useUser,
	useAddress,
	useCart,
	useOrders,
} from '../../Providers'

import { PayPalButton } from 'react-paypal-button-v2'

import { TeenyiconsTickCircleOutline } from '../../assets/Logo'

import { usePaypal } from '../../Hooks/usePaypal'
import { useEffect } from 'react'
import toast from 'react-hot-toast'

const PaymentScreen = () => {
	const [
		cuponApplied,
		applyCandy50,
		checkCupon,
		cupon,
		setCuponApplied,
		setCupon,
	] = useCupon()

	const { userInfo } = useUser()

	const sdkReady = usePaypal()

	const { deliveryAddress } = useAddress()

	const { cartItems, clearCartAction } = useCart()

	const { addOrderAction } = useOrders()

	const navigate = useNavigate()

	const subtotal = cartItems?.reduce(
		(acc, val) => acc + val.qty * Number(val.price),
		0
	)

	const totalPriceAfterDiscount =
		cuponApplied && cupon === 'CANDY50' ? subtotal * 0.5 : subtotal

	useEffect(() => {
		if (cupon === 'CANDY50' && cuponApplied) {
			toast.success('Cupon Applied 🚀')
		}
	}, [cupon, cuponApplied])

	const paymentSuccessHandler = async paymentResult => {
		if (paymentResult?.status === 'COMPLETED') {
			addOrderAction(cartItems)
			clearCartAction()
			navigate('/orders')
		}
	}

	return (
		<ScrollToTop>
			<div className='d-flex payment-screen'>
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
									product={item}
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
								<span className='fs-500'>
									${totalPriceAfterDiscount}
								</span>
							</span>
						) : (
							<p className='fs-500'>Subtotal : ${subtotal}</p>
						)}
					</div>
					<div className='cupon-input-wrapper'>
						<label htmlFor='cupon-input '>
							<span className='fs-500 cupon-input-tag'>Cupon: </span>
						</label>
						<input
							id='cupon'
							className='cupon-input-feild'
							placeholder='Cupon'
							onChange={e => {
								setCupon(e.target.value)
								setCuponApplied(false)
							}}
							value={cupon}
						/>
						<button
							disabled={cupon.length < 1}
							onClick={checkCupon}
							className='btn btn-cupon letter-spacing-5 uppercase fs-300'>
							Apply
						</button>
					</div>

					<div onClick={applyCandy50} className='cupon-card'>
						{cuponApplied && (
							<TeenyiconsTickCircleOutline
								className='cupon-applied'
								height='1.5rem'
								width='1.5rem'
								stroke='green'
							/>
						)}
						<strong className='fs-500'>CANDY50: FLAT 50% OFF</strong>
					</div>
					<div className='payment-gateway'>
						{sdkReady && (
							<PayPalButton
								amount={totalPriceAfterDiscount}
								onSuccess={paymentSuccessHandler}
							/>
						)}
					</div>
				</div>
			</div>
		</ScrollToTop>
	)
}

export default PaymentScreen
