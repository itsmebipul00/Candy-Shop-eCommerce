import axios from 'axios'
export const authorizeToken = () => {
	axios.interceptors.request.use(request => {
		request.headers.authorization = localStorage.getItem('userToken')
		return request
	})
}
