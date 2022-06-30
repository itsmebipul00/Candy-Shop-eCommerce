import React, { useRef } from 'react'

export const useScroll = () : [React.RefObject<HTMLDivElement>, (scrollOffset: number) => void] => {
	const sliderBtn = useRef<HTMLDivElement>(null)

	const scroll = (scrollOffset: number) => {
		(sliderBtn.current as HTMLElement).scrollLeft += scrollOffset
	}

	return [sliderBtn, scroll]
}
