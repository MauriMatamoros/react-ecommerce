import { Header, Icon, Segment, Button } from 'semantic-ui-react'

const CartItemList = ({ user }) => {
	console.log({ user })
	return (
		<Segment secondary color='teal' inverted textAlign='center' placeholder>
			<Header icon>
				<Icon name='shopping basket' />
				No products in your cart. Add some!
			</Header>
			<div className=''>
				{user ? (
					<Button color='orange'>View Products</Button>
				) : (
					<Button color='blue'>Login to Add Products</Button>
				)}
			</div>
		</Segment>
	)
}

export default CartItemList
