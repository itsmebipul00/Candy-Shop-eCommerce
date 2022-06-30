import { Fragment, useEffect } from 'react'

import { useLocation } from 'react-router-dom'

export const ScrollToTop = (props:React.PropsWithChildren<{}>) => {
	const { pathname } = useLocation()
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [pathname])
	return <Fragment>{props.children}</Fragment>
}
