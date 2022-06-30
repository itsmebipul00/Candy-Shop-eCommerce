import { useEffect, useRef } from 'react'

export const useEventListener = (
	eventType:string,
	callback: (e:Event) => void,
	element = window
) => {
	const callbackRef = useRef(callback)

	useEffect(() => {
		callbackRef.current = callback
	}, [callback])

	useEffect(() => {
		if (element == null) return
		element.addEventListener(eventType, e => callbackRef.current(e))

		return () => element.removeEventListener(eventType, e => callbackRef.current(e))
	}, [eventType, element])
}
