import axios from 'axios'

const addressService = {
	addAddress: async addressData => {
		try {
			const res = await axios.post('/api/user/address', {
				address: addressData,
			})
			console.log(res.data)
			return res.data
		} catch (error) {
			throw error
		}
	},
	editAddress: async addressData => {
		try {
			const res = await axios.put('/api/user/address', {
				address: addressData,
			})
			return res.data
		} catch (error) {
			throw error
		}
	},
	deleteAddress: async id => {
		try {
			const res = await axios.delete(`/api/user/address/${id}`)
			return res.data
		} catch (error) {
			throw error
		}
	},
}

export default addressService
