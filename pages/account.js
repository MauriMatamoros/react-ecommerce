import { parseCookies } from 'nookies'
import axios from 'axios'

import baseUrl from '../utils/baseUrl'
import AccountHeader from '../components/Account/AccountHeader'
import AccountOrders from '../components/Account/AccountOrders'
import AccountPermissions from '../components/Account/AccountPermissions'

const Account = ({ user, orders }) => {
	return (
		<>
			<AccountHeader {...user} />
			<AccountOrders orders={orders} />
			{user.role === 'root' && <AccountPermissions currentUserId={user._id} />}
		</>
	)
}

Account.getInitialProps = async (ctx) => {
	const { token } = parseCookies(ctx)
	// Check not necessary due to configurations in _app.js
	if (!token) {
		return { orders: [] }
	}
	const payload = { headers: { Authorization: token } }
	const url = `${baseUrl}/api/orders`
	const { data } = await axios.get(url, payload)
	return {
		orders: data
	}
}

export default Account
