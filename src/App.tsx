import { BrowserRouter, Route, Routes } from 'react-router-dom'

import {
	NotFoundScreen,
	PaymentScreen,
	OrdersScreen,
	AddressScreen,
	UserInfoScreen,
	WishScreen,
	ProductScreen,
	ProductListScreen,
	CartScreen,
	HomeScreen,
	LoginScreen,
	RegisterScreen,
	ProfileScreen,
} from './Screens'

import {
	Header,
	Footer,
	PrivateRoute,
	ProtectedRoute,
} from './Components'

function App() {
	return (
		<BrowserRouter>
			<Header />
			<main>
				<Routes>
					<Route path='/' element={<HomeScreen />} />
					<Route path='/products' element={<ProductListScreen />} />
					<Route path='/product/:id' element={<ProductScreen />} />

					<Route element={<ProtectedRoute />}>
						<Route path='/login' element={<LoginScreen />} />
						<Route path='/register' element={<RegisterScreen />} />
					</Route>

					<Route element={<PrivateRoute />}>
						<Route path='/payment' element={<PaymentScreen />} />

						<Route path='/' element={<ProfileScreen />}>
							<Route path='cart' element={<CartScreen />} />
							<Route path='wishlist' element={<WishScreen />} />
							<Route path='userInfo' element={<UserInfoScreen />} />
							<Route path='address' element={<AddressScreen />} />
							<Route path='orders' element={<OrdersScreen />} />
						</Route>
					</Route>

					<Route path='*' element={<NotFoundScreen />} />
				</Routes>
			</main>
			<footer>
				<Footer />
			</footer>
		</BrowserRouter>
	)
}

export default App
