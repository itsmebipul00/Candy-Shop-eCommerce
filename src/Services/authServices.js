import axios from 'axios'
const authService = {
	login: async (email, password) => {
		try {
			const res = await axios.post('/api/auth/login', {
				email,
				password,
			})
			console.log(res.data)
			localStorage.setItem('userToken', res.data.encodedToken)
			return res.data
		} catch (error) {
			throw error
		}
	},
	register: async (username, email, password) => {
		try {
			const res = await axios.post('/api/auth/signup', {
				username,
				email,
				password,
			})
			return res.data
		} catch (error) {
			throw error
		}
	},
}

export default authService
