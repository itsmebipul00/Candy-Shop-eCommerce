import './LoginScreen.css'

import { Link, useLocation, useNavigate } from 'react-router-dom'

import { useState } from 'react'

import { useUser } from '../../actionProviders/userActions'

import authService from '../../Services/authServices'

import { MdiEyeOutline, MdiEyeOffOutline } from '../../assets/Logo'
import { useFocusInput } from '../../Hooks/useFocusInput'

const LoginScreen = () => {
	const navigate = useNavigate()

	const inputRef = useFocusInput()

	const [loginFormData, setLoginFormData] = useState({
		email: '',
		password: '',
	})

	const location = useLocation()

	const { setUserAction } = useUser()

	const [showPass, setShowPass] = useState(true)

	const handleRegisterSubmit = e => {
		e.preventDefault()
		authService
			.login(loginFormData.email, loginFormData.password)
			.then(data => setUserAction(data))
			.then(() => navigate(-1))
	}

	const handleChange = event => {
		event.preventDefault()

		const { name, value, type, checked } = event.target

		setLoginFormData(prevFormData => {
			return {
				...prevFormData,
				[name]: type === 'checkbox' ? checked : value,
			}
		})
	}

	const handleGuest = () => {
		setLoginFormData({
			email: 'itsmebipul00@gmail.com',
			password: 'itsmeBipul00@gmail.com',
		})
	}

	return (
		<form
			className='form-login fs-400 letter-spacing-3'
			onSubmit={handleRegisterSubmit}>
			<label htmlFor='email' className='email'>
				Email<span className='text-red'>*</span>
			</label>

			<input
				id='email'
				className='form-email'
				type='email'
				name='email'
				onChange={handleChange}
				value={loginFormData.email}
				required
				ref={inputRef}
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
					type={showPass ? 'password' : 'text'}
					minLength='8'
					name='password'
					onChange={handleChange}
					value={loginFormData.password}
					required
				/>

				{showPass ? (
					<MdiEyeOutline
						className='fas fa-eye p-absolute'
						onClick={() => setShowPass(prev => !prev)}
					/>
				) : (
					<MdiEyeOffOutline
						className='fas fa-eye p-absolute'
						onClick={() => setShowPass(prev => !prev)}
					/>
				)}
			</div>

			<button className='btn btn-signUp uppercase letter-spacing-1'>
				Login
			</button>

			<p className='already-done'>
				Yet to Register?{' '}
				<Link
					to='/register'
					className='text-blue text-underline'
					state={{ form: location.pathname }}>
					Register
				</Link>
			</p>
			<p className='d-inline'>
				<span>Guest? </span>
				<button className='btn btn-guest' onClick={handleGuest}>
					Guest Login
				</button>
			</p>
		</form>
	)
}

export default LoginScreen
