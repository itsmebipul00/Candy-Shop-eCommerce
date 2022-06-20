import { MdiEyeOutline, MdiEyeOffOutline } from '../../Assets/Logo'
export const PasswordEye = ({ setShowPass, showPass }) => {
	return (
		<>
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
		</>
	)
}
