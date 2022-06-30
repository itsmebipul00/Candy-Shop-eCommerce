import { useState } from 'react'

type CuponReturnType = [boolean, () => void, () => void, string,  React.Dispatch<React.SetStateAction<boolean>>, React.Dispatch<React.SetStateAction<string>>]

export const useCupon = () : CuponReturnType => {
	const [cupon, setCupon] = useState<string>('')
	const [cuponApplied, setCuponApplied] = useState<boolean>(false)

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
