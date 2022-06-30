import axios from 'axios'

import {InititalData, Address} from '../types/data/address.type'

const addressService = {
	addAddress: async (addressData:InititalData) => {
		try {
			const res = await axios.post('/api/user/address', {
				address: addressData,
			})
			return res.data
		} catch (error) {
			throw error
		}
	},
	editAddress: async (addressData: Address)=> {
		try {
			const res = await axios.put('/api/user/address', {
				address: addressData,
			})
			return res.data
		} catch (error) {
			throw error
		}
	},
	deleteAddress: async (id: string) => {
		try {
			const res = await axios.delete(`/api/user/address/${id}`)
			return res.data
		} catch (error) {
			throw error
		}
	},
}

export default addressService
