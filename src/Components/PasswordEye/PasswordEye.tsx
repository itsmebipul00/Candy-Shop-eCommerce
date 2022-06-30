import { MdiEyeOutline, MdiEyeOffOutline } from '../../assets/Logo'
export const PasswordEye = (props: { setShowPass: React.Dispatch<React.SetStateAction<boolean>>, showPass: boolean }) => {
	const {showPass, setShowPass} = props
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
