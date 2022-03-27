import './WishScreen.css'
import { useContext } from 'react'
import { WishListContext } from '../../context'
import { ProductCard } from '../../Components/ProductCard/ProductCard'

const WishScreen = () => {
	const { toggleWishListAction, wishList } =
		useContext(WishListContext)

	const addtocartHandler = () => {}

	return (
		<div className='wish-screen'>
			{wishList &&
				wishList.length > 0 &&
				wishList.map(p => (
					<ProductCard
						key={p._id}
						_id={p._id}
						addtocartHandler={addtocartHandler}
						image={p.image}
						title={p.title}
						price={p.price}
						rating={p.rating}
						toggleWishListAction={toggleWishListAction}
					/>
				))}
		</div>
	)
}

export default WishScreen
