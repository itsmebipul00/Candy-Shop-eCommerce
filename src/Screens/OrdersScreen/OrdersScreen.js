import { useOrders } from '../../actionProviders/ordersActions'
import EmptyBasket from '../../Components/EmptyBasket/EmptyBasket'

import './OrdersScreen.css'

const OrdersScreen = () => {
	const { orders } = useOrders()

	return (
		<div className='order-screen'>
			{orders && orders.length > 0 ? (
				orders?.map((item, idx) => (
					<div key={item._id} className='order-items'>
						<h2 className='fs-500 order-id'>OrderId: {item._id}</h2>
						{item?.order?.map((item, idx) => (
							<div className='d-flex' key={idx}>
								<div className='order-img-wrapper'>
									<img
										src={item.image}
										alt={item.img}
										className='order-img'
									/>
								</div>
								<div className='order-info fs-500'>
									<p>{item.title}</p>
									<p>QTY: {item.qty}</p>
								</div>
							</div>
						))}
					</div>
				))
			) : (
				<EmptyBasket basket='orders' />
			)}
		</div>
	)
}

export default OrdersScreen
