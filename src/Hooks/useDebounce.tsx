import { useTimeout } from './useTimeout'
import { useEffect } from 'react'

export const useDebounce = (callback: () => void, delay: number, dependencies: string[]) => {
	const { reset, clear } = useTimeout(callback, delay)

	//everytime the dependeices changes we want to reset the timer so that we call the callback exactly after the delay
	useEffect(reset, [...dependencies, reset])

	//first render we want to clear the dependencies so that render is not called
	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(clear, [])
}
