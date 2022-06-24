import { v4 as uuid } from 'uuid'

import { useState } from 'react'

import { useLocation, useNavigate } from 'react-router-dom'

import { NewAddressDialog, EmptyBasket } from '../../Components'

import { useAddress } from '../../Providers'

import addressService from '../../Services/addressServices'

import {
	IcBaselineDeleteOutline,
	IcOutlineModeEdit,
	TeenyiconsTickCircleOutline,
} from '../../assets/Logo'

import './AddressScreen.css'

import toast from 'react-hot-toast'

const AddressScreen = () => {
	const [showModal, setShowModal] = useState(false)

	const [addressData, setAddressData] = useState()

	const navigate = useNavigate()

	const location = useLocation()

	const {
		address,
		addAddress,
		deleteAddress,
		updateAddress,
		setDeliveryAddress,
		deliveryAddress,
	} = useAddress()

	const initialData = {
		_id: uuid(),
		mobile: 9999,
		pincode: 999,
		address: 'Hello World',
	}

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

	const handleSubmit = async e => {
		e.preventDefault()

		if (address?.length > 0) {
			const existAddress =
				address.findIndex(add => add._id === addressData._id) === -1
					? false
					: true

			if (existAddress) {
				addressService
					.editAddress(addressData)
					.then(data => updateAddress(data.address))
				toast.success('Address Updated 🚀')
			} else {
				addressService
					.addAddress(addressData)
					.then(data => addAddress(data.address))
				toast.success('New address added 🚀')
			}
		} else {
			addressService
				.addAddress(addressData)
				.then(data => addAddress(data.address))
			toast.success('New address added 🚀')
		}

		setShowModal(false)
	}

	const handleDelete = async id => {
		addressService
			.deleteAddress(id)
			.then(data => deleteAddress(data.address))

		if (deliveryAddress && id === deliveryAddress._id)
			setDeliveryAddress(undefined)
		toast.success('Address deleted 🚀')
	}

	const handleEdit = id => {
		const editAddressData = address.find(add => add._id === id)
		setShowModal(true)
		setAddressData(editAddressData)
	}

	return (
		<div className='address-screen'>
			<div className='address-screens-ctas'>
				{location?.state?.from === '/cart' && deliveryAddress && (
					<button
						className='btn-address'
						onClick={() => navigate('/payment')}>
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
				{address && address.length > 0 ? (
					address?.map((add, idx) => (
						<div key={idx} className='individual-address'>
							<TeenyiconsTickCircleOutline
								onClick={() => {
									setDeliveryAddress(add)
									toast.success('Set Delivery address 🚀')
								}}
								className='select-address-icon'
								stroke={`${
									deliveryAddress?._id === add?._id
										? 'green'
										: 'currentColor'
								}`}
							/>

							<div className='adddress-screen-icons'>
								<IcBaselineDeleteOutline
									width='1.5rem'
									height='1.5rem'
									onClick={() => handleDelete(add._id)}
								/>

								<IcOutlineModeEdit
									width='1.5rem'
									height='1.5rem'
									onClick={() => handleEdit(add._id)}
								/>
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
					))
				) : (
					<EmptyBasket basket='address' />
				)}
			</section>
		</div>
	)
}

export default AddressScreen
