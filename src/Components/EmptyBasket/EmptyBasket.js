import { useLocation, useNavigate } from 'react-router-dom'

const EmptyBasket = props => {
	const navigate = useNavigate()
	const location = useLocation()
	return (
		<div className='empty-cart'>
			<div className='empty-cart-wrapper'>
				<img
					src={`${window.location.origin}/images/empty-${props.basket}.png`}
					alt='empty-cart'
					className='empty-cart'
				/>
			</div>
			<p className='empty-subheading fs-700'>
				<strong>
					<span className='uppercase'>{props.basket}</span> is empty
				</strong>
			</p>
			{location.pathname !== '/address' && (
				<button
					className='btn btn-empty letter-spacing-3'
					onClick={() => navigate('/products')}>
					Shop now
				</button>
			)}
		</div>
	)
}

export default EmptyBasket
