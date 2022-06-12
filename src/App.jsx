import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
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
import OrdersScreen from './Screens/OrdersScreen/OrdersScreen.js'

import { ProductsProvider } from './actionProviders/productActions'

import { AddressProvider } from './actionProviders/addressProvider'

import { WishListProvider } from './actionProviders/wishListAction'

import { CartProvider } from './actionProviders/cartActions'
import { UserProvider } from './actionProviders/userActions'

import { OrdersProvider } from './actionProviders/ordersActions'

import { Header } from './Components/Header/Header'
import { Footer } from './Components/Footer/Footer'
import PaymentScreen from './Screens/PaymentScreen/PaymentScreen'

function App() {
	return (
		<ProductsProvider>
			<UserProvider>
				<AddressProvider>
					<WishListProvider>
						<CartProvider>
							<OrdersProvider>
								<BrowserRouter>
									<Header />
									<Routes>
										<Route path='/' element={<HomeScreen />} />
										<Route path='/login' element={<LoginScreen />} />
										<Route
											path='/payment'
											element={<PaymentScreen />}
										/>
										<Route
											path='/product/:id'
											element={<ProductScreen />}
										/>
										<Route path='/' element={<ProfileScreen />}>
											<Route path='cart' element={<CartScreen />} />
											<Route
												path='wishlist'
												element={<WishScreen />}
											/>
											<Route
												path='userInfo'
												element={<UserInfoScreen />}
											/>
											<Route
												path='address'
												element={<AddressScreen />}
											/>
											<Route
												path='/placeorder'
												element={<PlaceOrderScreen />}
											/>
											<Route
												path='/orders'
												element={<OrdersScreen />}
											/>
										</Route>
										<Route
											path='/register'
											element={<RegisterScreen />}
										/>
										<Route
											path='/products'
											element={<ProductListScreen />}></Route>
									</Routes>
									<footer>
										<Footer />
									</footer>
								</BrowserRouter>
							</OrdersProvider>
						</CartProvider>
					</WishListProvider>
				</AddressProvider>
			</UserProvider>
		</ProductsProvider>
	)
}

export default App
