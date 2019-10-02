import { useState } from 'react'
import { Segment } from 'semantic-ui-react'
import { parseCookies } from 'nookies'
import axios from 'axios'
import cookie from 'js-cookie'

import CartItemList from '../components/Cart/CartItemList'
import CartSummary from '../components/Cart/CartSummary'
import baseUrl from '../utils/baseUrl'

const Cart = ({ user, products }) => {
	const [cartProducts, setCartProducts] = useState(products)

	const handleRemoveFromCart = async (_id) => {
		const url = `${baseUrl}/api/cart/${_id}`
		const token = cookie.get('token')
		const payload = {
			headers: { Authorization: token }
		}
		const { data } = await axios.delete(url, payload)
		setCartProducts(data)
	}

	return (
		<Segment>
			<CartItemList
				handleRemoveFromCart={handleRemoveFromCart}
				user={user}
				products={cartProducts}
			/>
			<CartSummary products={cartProducts} />
		</Segment>
	)
}

Cart.getInitialProps = async (ctx) => {
	const { token } = parseCookies(ctx)
	if (!token) {
		return { products: [] }
	}
	const url = `${baseUrl}/api/cart`
	const payload = {
		headers: {
			Authorization: token
		}
	}
	const { data } = await axios.get(url, payload)
	return {
		products: data
	}
}

export default Cart
