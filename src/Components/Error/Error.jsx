import toast, { Toaster } from 'react-hot-toast'

export const Error = ({ error }) => {
	const errorToast = toast.error(error)
	return (
		<>
			<div>{errorToast}</div>
			<Toaster />
		</>
	)
}
