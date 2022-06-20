import './RegisterScreen.css'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { useUser } from '../../Providers'
import { PasswordEye } from '../../Components'

import authService from '../../Services/authServices'

import { useFocusInput } from '../../Hooks/useFocusInput'

const RegisterScreen = () => {
	const location = useLocation()

	const inputRef = useFocusInput()

	const [registerFromData, setRegisterFormData] = useState({
		username: '',
		email: '',
		password: '',
		confirmPassword: '',
	})

	const [message, setMessage] = useState('')

	const { setUserAction } = useUser()

	const [showPass, setShowPass] = useState(true)

	const navigate = useNavigate()

	const handleLoginSubmit = async event => {
		event.preventDefault()
		if (
			registerFromData.password !== registerFromData.confirmPassword
		) {
			setMessage('Passwords do not match')
		} else {
			setMessage('')
			authService
				.register(
					registerFromData.username,
					registerFromData.email,
					registerFromData.password
				)
				.then(data =>
					authService.login(
						data.createdUser.email,
						data.createdUser.password
					)
				)
				.then(data => setUserAction(data))
				.then(() => navigate('/products'))
		}
	}

	const handleChange = event => {
		const { name, value } = event.target
		setRegisterFormData(prevFormData => {
			return {
				...prevFormData,
				[name]: value,
			}
		})
	}

	return (
		<>
			<form
				className='form form-login fs-400 letter-spacing-3'
				onSubmit={handleLoginSubmit}>
				<label htmlFor='username' className='username'>
					Username<span className='text-red'>*</span>
				</label>
				<input
					id='username'
					className='form-username'
					type='text'
					name='username'
					onChange={handleChange}
					value={registerFromData.username}
					required
					ref={inputRef}
				/>

				<label htmlFor='email' className='email'>
					Email<span className='text-red'>*</span>
					<span
						className='form__tooltip'
						data-tooltip='Please enter your email address'></span>
				</label>
				<input
					id='email'
					className='form-email'
					type='email'
					name='email'
					onChange={handleChange}
					value={registerFromData.email}
					required
				/>

				<label htmlFor='password' className='password'>
					Password<span className='text-red'>*</span>
					<span
						className='form__tooltip'
						data-tooltip='Minimum 8 characters'></span>
				</label>

				<div className='p-relative'>
					<input
						id='password'
						className='form-password'
						type='password'
						minLength='8'
						name='password'
						onChange={handleChange}
						value={registerFromData.password}
						required
					/>
				</div>

				<label htmlFor='confirm-password' className='password'>
					Confirm Password<span className='text-red'>*</span>
					<span
						className='form__tooltip'
						data-tooltip='Minimum 8 characters'></span>
				</label>

				<div className='p-relative'>
					<input
						id='confirmPassword'
						className='form-password'
						type={showPass ? 'password' : 'text'}
						minLength='8'
						name='confirmPassword'
						onChange={handleChange}
						value={registerFromData.confirmPassword}
						required
					/>
					<PasswordEye
						setShowPass={setShowPass}
						showPass={showPass}
					/>
				</div>
				<p className='fs-300 text-red'>{message}</p>

				<button className='btn btn-signUp uppercase letter-spacing-1'>
					Sign up
				</button>
				<p className='already-done'>
					Alredy Registered?{' '}
					<Link to='/login' state={{ form: location.pathname }}>
						Login
					</Link>
				</p>
			</form>
		</>
	)
}

export default RegisterScreen
