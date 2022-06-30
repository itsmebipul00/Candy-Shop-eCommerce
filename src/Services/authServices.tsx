import axios from 'axios'

const authService = {
	login: async (email:string, password: string) => {
		try {
			const res = await axios.post('/api/auth/login', {
				email,
				password,
			})
			localStorage.setItem('userToken', res.data.encodedToken)
			return res.data
		} catch (error) {
			throw error
		}
	},
	register: async (username: string, email: string, password: string) => {
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
