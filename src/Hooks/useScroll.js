import { useRef } from 'react'

export const useScroll = () => {
	const sliderBtn = useRef(null)

	const scroll = scrollOffset => {
		sliderBtn.current.scrollLeft += scrollOffset
	}

	return [sliderBtn, scroll]
}
