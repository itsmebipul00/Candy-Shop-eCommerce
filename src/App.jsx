import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import { Toaster } from 'react-hot-toast'
import ProfileScreen from './Screens/ProfileScreen/ProfileScreen'
import RegisterScreen from './Screens/RegisterScreen/RegisterScreen'
import LoginScreen from './Screens/LoginScreen/LoginScreen'
import PlaceOrderScreen from './Screens/PlaceOrderScreen/PlaceOrderScreen'
import HomeScreen from './Screens/HomeScreen/HomeScreen'
import CartScreen from './Screens/CartScreen/CartScreen'
import ProductListScreen from './Screens/ProductListScreen/ProductListScreen'
import ProductScreen from './Screens/ProductScreen/ProductScreen'
import WishScreen from './Screens/WishScreen/WishScreen.js'
import UserInfoScreen from './Screens/UserInfoScreen/UserInfoScreen.js'
import AddressScreen from './Screens/AddressScreen/AddressScreen.js'

import {
	ProductsProvider,
	WishListProvider,
} from './actionProviders/productActions'
import { UserProvider } from './actionProviders/userActions'

import { Header } from './Components/Header/Header'
import { Footer } from './Components/Footer/Footer'

function App() {
	return (
		<ProductsProvider>
			<UserProvider>
				<WishListProvider>
					<BrowserRouter>
						<Header />
						<main>
							<Routes>
								<Route path='/' element={<HomeScreen />} />
								<Route path='/login' element={<LoginScreen />} />
								<Route
									path='/placeOrder'
									element={<PlaceOrderScreen />}
								/>
								<Route
									path='/product/:id'
									element={<ProductScreen />}
								/>
								<Route path='/' element={<ProfileScreen />}>
									<Route path='cart' element={<CartScreen />} />
									<Route path='wishlist' element={<WishScreen />} />
									<Route
										path='userInfo'
										element={<UserInfoScreen />}
									/>
									<Route path='address' element={<AddressScreen />} />
								</Route>
								<Route
									path='/register'
									element={<RegisterScreen />}
								/>
								<Route
									path='/products'
									element={<ProductListScreen />}
								/>
							</Routes>
						</main>
						<footer>
							<Footer />
						</footer>
					</BrowserRouter>
				</WishListProvider>
			</UserProvider>
		</ProductsProvider>
	)
}

export default App
