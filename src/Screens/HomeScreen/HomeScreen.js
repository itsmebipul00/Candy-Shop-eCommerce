// Componets: Search
import './HomeScreen.css'

import {
	Carousal,
	CategoriesScroll,
	ScrollToTop,
} from '../../Components'

const HomeScreen = () => {
	return (
		<ScrollToTop>
			<CategoriesScroll />
			<Carousal />
		</ScrollToTop>
	)
}

export default HomeScreen
