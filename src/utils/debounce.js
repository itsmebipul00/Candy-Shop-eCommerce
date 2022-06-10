export const debounce = (cb, delay) => {
	let timeOut
	return (...args) => {
		clearTimeout(timeOut)
		timeOut = setTimeout(() => {
			cb(...args)
		}, delay)
	}
}
