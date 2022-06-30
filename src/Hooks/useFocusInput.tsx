import { useRef, useEffect } from 'react'

export const useFocusInput = () => {
	const inputRef= useRef<HTMLInputElement>(null) 

	useEffect(() => {
		inputRef?.current?.focus()
	}, [])

	return inputRef
}
