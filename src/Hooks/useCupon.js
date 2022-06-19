import { useState } from 'react'
export const useCupon = () => {
	const [cupon, setCupon] = useState('')
	const [cuponApplied, setCuponApplied] = useState(false)

	const applyCandy50 = () => {
		setCupon('CANDY50')
		setTimeout(() => setCuponApplied(true), 1000)
	}

	const checkCupon = () => {
		if (cupon === 'CANDY50') {
			setCuponApplied(true)
		} else {
			setCuponApplied(false)
		}
	}

	return [
		cuponApplied,
		applyCandy50,
		checkCupon,
		cupon,
		setCuponApplied,
		setCupon,
	]
}
