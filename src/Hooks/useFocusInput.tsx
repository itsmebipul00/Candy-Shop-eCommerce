import { useRef, useEffect, RefObject } from 'react'

export const useFocusInput = () => {
	const inputRef= useRef() as RefObject<HTMLInputElement>

	useEffect(() => {
		inputRef?.current?.focus()
	}, [])

	return inputRef
}
