import { useState, useEffect } from 'react'

export const useCarousal = () => {
	const [carousal, setCarousal] = useState<number>(1)

	useEffect(() => {
		const timerId = setInterval(
			() => setCarousal(prev => (prev === 3 ? 1 : prev + 1)),
			2000
		)
		return () => clearInterval(timerId)
	}, [])

	return carousal
}
