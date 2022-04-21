import './UserInfoScreen.css'

import { useUser } from '../../actionProviders/userActions'

const UserInfoScreen = () => {
	const {
		userInfo: {
			foundUser: { email, username },
		},
	} = useUser()

	return (
		<section className='userInfo-wrapper'>
			<div className='userInfo'>
				<h2 className='info-title letter-spacing-5'>
					User Information
				</h2>

				<p className='fs-500'>
					<span>Name: </span> {username}
				</p>
				<p className='fs-500'>
					<span>Email: </span>
					{email}
				</p>
			</div>
		</section>
	)
}

export default UserInfoScreen
