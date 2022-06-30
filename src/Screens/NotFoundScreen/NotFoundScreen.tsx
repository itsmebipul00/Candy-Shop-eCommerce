import { Link } from 'react-router-dom'
import './NotFoundScreen.css'
const NotFoundScreen = () => {
	return (
		<div className='not-found-screen'>
			<img
				src='/images/404.gif'
				alt='404-gif'
				className='page-not-found'
			/>
			<Link
				to='/products'
				className='btn btn-shop-now uppercase uppercase letter-spacing-2 fs-700'>
				Shop Now
			</Link>
		</div>
	)
}

export default NotFoundScreen
