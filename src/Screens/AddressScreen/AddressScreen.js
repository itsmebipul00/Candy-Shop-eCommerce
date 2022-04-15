import { v4 as uuid } from 'uuid'

import { useState } from 'react'

import { NewAddressDialog } from '../../Components/NewAddressDialog/NewAddressDialog.js'

import { useAddress } from '../../actionProviders/addressProvider.js'

import {
	IcBaselineDeleteOutline,
	IcOutlineModeEdit,
} from '../../assets/Icons/Logo'

import './AddressScreen.css'

const AddressScreen = () => {
	const [showModal, setShowModal] = useState(false)

	const { address, addressDispatcher } = useAddress()

	const initialData = {
		_id: uuid(),
		mobile: 9999,
		pincode: 999,
		address: 'Hello World',
	}

	const [addressData, setAddressData] = useState()

	const handleNewAddress = () => {
		setShowModal(true)
		setAddressData(initialData)
	}

	const handleChange = e => {
		const { value, name } = e.target
		setAddressData(prev => {
			return { ...prev, [name]: value }
		})
	}

	console.log(addressData)

	const handleSubmit = e => {
		e.preventDefault()
		const existAddress = addressData.findIndex(
			add => add._id === addressData._id
		)
			? true
			: false
		console.log(existAddress)
		// addressDispatcher({
		// 	type: 'NEW_ADDRESS',
		// 	payload: addressData,
		// })
		// setShowModal(false)
	}

	const handleDelete = id => {
		addressDispatcher({
			type: 'DELETE_ADDRESS',
			payload: id,
		})
	}

	const handleEdit = id => {
		const editAddressData = address.find(add => add._id === id)
		console.log(editAddressData)
		setShowModal(true)
		setAddressData(editAddressData)
	}

	// addressDispatcher({
	// 	type: 'UPDATE_ADDRESS',
	// })

	return (
		<div className='address-screen'>
			<button className='btn-address' onClick={handleNewAddress}>
				New Address
			</button>
			<NewAddressDialog
				showModal={showModal}
				setShowModal={setShowModal}
				addressData={addressData}
				handleSubmit={handleSubmit}
				handleChange={handleChange}
			/>
			<section className='user-address-details'>
				{address.map((add, idx) => (
					<div key={idx} className='individual-address'>
						<div className='adddress-screen-icons'>
							<button onClick={() => handleDelete(add._id)}>
								<IcBaselineDeleteOutline
									stroke='red'
									width='2rem'
									height='2rem'
								/>
							</button>
							<button onClick={() => handleEdit(add._id)}>
								<IcOutlineModeEdit
									stroke='blue'
									width='2rem'
									height='2rem'
								/>
							</button>
						</div>

						<p>
							<span className='fs-500'>Mobile No: </span>
							{add.mobile}
						</p>
						<p>
							<span className='fs-500'>Pincode: </span>
							{add.pincode}
						</p>
						<p>
							<span className='fs-500'>Address: </span>
							{add.address}
						</p>
					</div>
				))}
			</section>
		</div>
	)
}

export default AddressScreen
