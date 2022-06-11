import { v4 as uuid } from 'uuid'

import { useState } from 'react'

import { useLocation, useNavigate } from 'react-router-dom'

import { NewAddressDialog } from '../../Components/NewAddressDialog/NewAddressDialog.js'

import { useAddress } from '../../actionProviders/addressProvider.js'

import {
	IcBaselineDeleteOutline,
	IcOutlineModeEdit,
	TeenyiconsTickCircleOutline,
} from '../../assets/Icons/Logo'

import './AddressScreen.css'

const AddressScreen = () => {
	const [showModal, setShowModal] = useState(false)

	const location = useLocation()

	const {
		address,
		addressDispatcher,
		setDeliveryAddress,
		deliveryAddress,
	} = useAddress()

	const initialData = {
		_id: uuid(),
		mobile: 9999,
		pincode: 999,
		address: 'Hello World',
	}

	const [addressData, setAddressData] = useState()

	const navigate = useNavigate()

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

	const handleSubmit = e => {
		e.preventDefault()

		if (address.length > 0) {
			const existAddress =
				address.findIndex(add => add._id === addressData._id) === -1
					? false
					: true

			if (existAddress) {
				addressDispatcher({
					type: 'UPDATE_ADDRESS',
					payload: addressData,
				})
			} else {
				addressDispatcher({
					type: 'NEW_ADDRESS',
					payload: addressData,
				})
			}
		} else {
			addressDispatcher({
				type: 'NEW_ADDRESS',
				payload: addressData,
			})
		}

		setShowModal(false)
	}

	const handleSelectAddress = add => {
		setDeliveryAddress(add)
	}

	const handleDelete = id => {
		addressDispatcher({
			type: 'DELETE_ADDRESS',
			payload: id,
		})
		if (id === deliveryAddress._id) {
			setDeliveryAddress(undefined)
		}
	}

	const handleEdit = id => {
		const editAddressData = address.find(add => add._id === id)
		setShowModal(true)
		setAddressData(editAddressData)
	}

	const handlePlaceOrder = () => {
		navigate('/payment')
	}

	return (
		<div className='address-screen'>
			<div className='address-screens-ctas'>
				{location.state.from === '/cart' && deliveryAddress && (
					<button className='btn-address' onClick={handlePlaceOrder}>
						Place Order
					</button>
				)}
				<button className='btn-address' onClick={handleNewAddress}>
					New Address
				</button>
			</div>
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
						{deliveryAddress?._id === add?._id ? (
							<TeenyiconsTickCircleOutline
								onClick={() => handleSelectAddress(add)}
								className='select-address-icon'
								stroke='green'
							/>
						) : (
							<TeenyiconsTickCircleOutline
								onClick={() => handleSelectAddress(add)}
								className='select-address-icon'
								stroke='currentColor'
							/>
						)}
						<div className='adddress-screen-icons'>
							<button onClick={() => handleDelete(add._id)}>
								<IcBaselineDeleteOutline
									width='1.5rem'
									height='1.5rem'
								/>
							</button>
							<button onClick={() => handleEdit(add._id)}>
								<IcOutlineModeEdit width='1.5rem' height='1.5rem' />
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
