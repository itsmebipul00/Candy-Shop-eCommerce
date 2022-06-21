import React from 'react'
import ReactDOM from 'react-dom'
import './App.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { Toaster } from 'react-hot-toast'
import { makeServer } from './server'
import axios from 'axios'
import {
	ProductsProvider,
	AddressProvider,
	WishListProvider,
	CartProvider,
	UserProvider,
	OrdersProvider,
} from './Providers'

makeServer()

axios.interceptors.request.use(request => {
	request.headers.authorization = localStorage.getItem('userToken')
	return request
})

ReactDOM.render(
	<>
		<Toaster
			position='bottom-left'
			reverseOrder={true}
			toastOptions={{
				style: {
					width: '100%',
					background: 'black',
					color: 'white',
					padding: '1rem 2rem',
				},
			}}
		/>
		<ProductsProvider>
			<UserProvider>
				<AddressProvider>
					<WishListProvider>
						<CartProvider>
							<OrdersProvider>
								<App />
							</OrdersProvider>
						</CartProvider>
					</WishListProvider>
				</AddressProvider>
			</UserProvider>
		</ProductsProvider>
	</>,
	document.getElementById('root')
)

reportWebVitals()
