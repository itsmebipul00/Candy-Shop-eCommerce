import React from 'react'
import ReactDOM from 'react-dom'
import './App.css'
import App from './App'
import { Toaster } from 'react-hot-toast'
import reportWebVitals from './reportWebVitals'

import { makeServer } from './server'

makeServer()

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
		<App />,
	</>,
	document.getElementById('root')
)

reportWebVitals()
