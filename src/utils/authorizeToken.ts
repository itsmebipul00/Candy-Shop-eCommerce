import axios  from 'axios'

export const authorizeToken = () => {
	axios.interceptors.request.use(request => {
		let auth = request.headers
		if(auth!==undefined){
			auth.authorization = localStorage.getItem('userToken') as 'string | null'
		}
		return request
	})
}
