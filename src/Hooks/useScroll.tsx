import { useRef } from 'react'

export const useScroll = () => {
	const sliderBtn = useRef<HTMLElement>()

	const scroll = (scrollOffset: number) => {
		let element = sliderBtn.current as HTMLElement
		element.scrollLeft += scrollOffset
	}

	return [sliderBtn, scroll]
}
