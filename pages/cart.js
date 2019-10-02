import { Segment } from 'semantic-ui-react'

import CartItemList from '../components/Cart/CartItemList'
import CartSummary from '../components/Cart/CartSummary'

const Cart = ({ user }) => {
	return (
		<Segment>
			<CartItemList user={user} />
			<CartSummary />
		</Segment>
	)
}

export default Cart
