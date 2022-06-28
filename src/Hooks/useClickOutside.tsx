import { useEventListener } from './useEventListner'
import {RefObject} from 'react'

export const useClickOutside = (ref: RefObject<HTMLElement>, cb:((e:Event) => void)) => {
	useEventListener(
		'click',
		e => {
			if (ref.current === null || ref.current.contains(e.target as Node))
				return
			cb(e)
		},
		window
	)
}
