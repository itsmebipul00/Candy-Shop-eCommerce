import { useState } from 'react'
import axios from 'axios'

export const useAxios = () => {
	const [response, setResponse] = useState(undefined)
	const [error, setError] = useState('')
	const [loading, setLoading] = useState(false)

	const fetchData = async params => {
		setLoading(true)
		try {
			const res = await axios.request(params)
			setResponse(res.data)
			setError(null)
		} catch (err) {
			setError(err)
		} finally {
			setLoading(false)
		}
	}

	return { response, error, loading, fetchData }
}
