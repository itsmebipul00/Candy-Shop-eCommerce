import './LoginScreen.css'

import { Link, useLocation, useNavigate } from 'react-router-dom'

import { useState } from 'react'

import axios from 'axios'

import { useUser } from '../../actionProviders/userActions'

const LoginScreen = () => {
	const navigate = useNavigate()

	const [loginFormData, setLoginFormData] = useState({
		email: '',
		password: '',
	})

	const location = useLocation()

	const { setUserAction } = useUser()

	const [showPass, setShowPass] = useState(true)

	const handlePasswordType = () => {
		setShowPass(prev => !prev)
	}

	const handleRegisterSubmit = async e => {
		e.preventDefault()
		try {
			const resLogin = await axios.post('/api/auth/login', {
				email: loginFormData.email,
				password: loginFormData.password,
			})

			const dataLogin = await resLogin.data

			localStorage.setItem('userToken', dataLogin.encodedToken)

			setUserAction(dataLogin)

			navigate(-1)
		} catch (error) {
			console.log('LOGIN FAILED TOAST')
		}
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

				<i
					className='fas fa-eye p-absolute'
					onClick={handlePasswordType}></i>
			</div>

			<div className='d-flex fs-400'>
				<span>
					<input
						type='checkbox'
						id='rememberMe'
						name='rememberMe'
						className='rememberMe'
						checked={loginFormData.remeberMe}
					/>
					<label htmlFor='rememberMe'>Remember me</label>
				</span>

				<Link
					to='#'
					className='forgot-password'
					state={{ form: location.pathname }}>
					Forgot Password ?
				</Link>
			</div>

			<button className='btn btn-signUp uppercase letter-spacing-1'>
				Login
			</button>

			<p className='already-done'>
				Yet to Register?{' '}
				<Link to='/register' state={{ form: location.pathname }}>
					Register
				</Link>
			</p>
		</form>
	)
}

export default LoginScreen
