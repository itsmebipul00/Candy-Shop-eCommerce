export const isEmptyObject = object =>
	Object.keys(object).length === 0 && object.constructor === Object

// export const isEmptyObject = () =>
// 	localStorage.getItem('userToken') ? true : false
