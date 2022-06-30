import { useOrders } from '../../Providers'
import { EmptyBasket } from '../../Components'

import './OrdersScreen.css'
import { Fragment } from 'react'

const OrdersScreen = () => {
	const { orders } = useOrders()

	return (
		<div className='order-screen'>
			{orders && orders.length > 0 ? (
				orders?.map((item, idx) => (
					<div key={idx} className='order-items'>
						<h2 className='fs-500 order-id'>OrderId: {item._id}</h2>
						<div className='d-flex f-wrap'>
							{item?.order?.items?.map((orderItem, idx) => (
								<Fragment key={idx}>
									<div className='order-img-wrapper'>
										<img
											src={orderItem.image}
											alt={orderItem.image}
											className='order-img'
										/>
									</div>
									<div className='order-info fs-500'>
										<p>{orderItem.title}</p>
										<p>QTY: {orderItem.qty}</p>
									</div>
								</Fragment>
							))}
							<div className='fs-500 order-details'>
								<p>Price: {item?.order?.totalPrice}</p>
								<p>
									Address: {item?.order?.deliveryAddress?.address}
								</p>
								<p>
									Pincode: {item?.order?.deliveryAddress?.pincode}
								</p>
								<p>Mobile: {item?.order?.deliveryAddress?.mobile}</p>
							</div>
						</div>
					</div>
				))
			) : (
				<EmptyBasket basket='orders' />
			)}
		</div>
	)
}

export default OrdersScreen
