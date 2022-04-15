import './NewAddressDialog.css'

export const NewAddressDialog = props => {
	const {
		showModal,
		setShowModal,
		handleChange,
		handleSubmit,
		addressData,
	} = props

	if (!showModal) {
		return null
	}

	return (
		<div
			className='new-address-dialog'
			onClick={() => setShowModal(false)}>
			<form
				onSubmit={handleSubmit}
				className='address-form'
				onClick={e => e.stopPropagation()}>
				<label htmlFor='no'>Mobile Number: </label>
				<input
					id='no'
					type='number'
					name='mobile'
					value={addressData.mobile}
					onChange={handleChange}
				/>
				<label htmlFor='pincode'>PinCode: </label>
				<input
					id='pincode'
					type='number'
					name='pincode'
					value={addressData.pincode}
					onChange={handleChange}
				/>
				<label htmlFor='address'>Full Address: </label>
				<input
					id='address'
					type='text'
					name='address'
					value={addressData.address}
					onChange={handleChange}
				/>
				<button className='submit-btn'>Submit</button>
			</form>
		</div>
	)
}
