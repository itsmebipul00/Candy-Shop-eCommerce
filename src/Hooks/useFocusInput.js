import { useRef, useEffect } from 'react'

export const useFocusInput = () => {
	const inputRef = useRef()

	useEffect(() => {
		inputRef.current.focus()
	}, [])

	return inputRef
}
