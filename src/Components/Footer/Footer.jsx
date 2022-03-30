import './Footer.css'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

export const Footer = () => {
	const { pathname } = useLocation()
	return (
		<div className='candyShop-footer'>
			<div className='footer-copyright'>&copy; CandyShop 2022</div>
			<div className='footer-wrapper'>
				<Link to='/products' state={{ from: pathname }}>
					All Products
				</Link>
				<Link to='/' state={{ from: pathname }}>
					Home
				</Link>
			</div>
		</div>
	)
}
