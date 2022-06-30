import './UserInfoScreen.css'

import { useUser } from '../../Providers'

const UserInfoScreen = () => {
	const {userInfo} =useUser()

	return (
		<section className='userInfo-wrapper'>
			<div className='userInfo'>
				<h2 className='info-title letter-spacing-5'>
					User Information
				</h2>

				<p className='fs-500'>
					<span>Name: </span> {userInfo?.foundUser?.username}
				</p>
				<p className='fs-500'>
					<span>Email: </span>
					{userInfo?.foundUser?.email}
				</p>
			</div>
		</section>
	)
}

export default UserInfoScreen
