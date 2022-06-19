import { useState, useEffect } from 'react'

export const usePaypal = () => {
	const [sdkReady, setSdkReady] = useState(false)

	useEffect(() => {
		const addPayPalScript = async () => {
			const script = document.createElement('script')
			script.type = 'text/javascript'
			script.src = `https://www.paypal.com/sdk/js?client-id=${process.env.REACT_APP_CLIENT_ID}`
			script.async = true
			script.onload = () => {
				setSdkReady(true)
			}
			document.body.appendChild(script)
		}
		if (!window.paypal) {
			addPayPalScript()
		} else {
			setSdkReady(true)
		}
	}, [])

	return sdkReady
}
