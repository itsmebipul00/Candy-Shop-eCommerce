import './HomeScreen.css'

import {
	Carousal,
	CategoriesScroll,
	ScrollToTop,
} from '../../Components'

const HomeScreen = () => {
	return (
		<ScrollToTop>
			<Carousal />
			<CategoriesScroll />
		</ScrollToTop>
	)
}

export default HomeScreen
