// Componets: Search
import './HomeScreen.css'

import { Carousal } from '../../Components/Carousal/Carousal'
import CategoriesScroll from '../../Components/CategoriesScroll/CategoriesScroll'

const HomeScreen = () => {
	return (
		<section>
			<CategoriesScroll />
			<Carousal />
		</section>
	)
}

export default HomeScreen
