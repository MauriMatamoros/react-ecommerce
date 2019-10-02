import Stripe from 'stripe'
import uuidv4 from 'uuid/v4'
import jwt from 'jsonwebtoken'

import Cart from '../../models/Cart'
import Order from '../../models/Order'
// imported Product due to the serverless architecture.
// Albeit being unused it still loads if the route is visited directly ergo preventing an error,
// in which it isn't loaded.
import Product from '../../models/Product'
import calculateCartTotal from '../../utils/calculateCartTotal'

const stripe = Stripe(process.env.STRIPE_SECRET_KEY)

// Bac payment would be handled here instead of Stripe's
export default async (req, res) => {
	const { paymentData } = req.body
	const { method } = req
	if (method !== 'POST') {
		res.setHeader('Allow', ['POST'])
		return res.status(405).end(`Method ${method} Not Allowed`)
	}
	try {
		const { userId } = jwt.verify(
			req.headers.authorization,
			process.env.JWT_SECRET
		)
		const cart = await Cart.findOne({ user: userId }).populate({
			path: 'products.product',
			model: 'Product'
		})
		const { cartTotal, stripeTotal } = calculateCartTotal(cart.products)
		const prevCustomer = await stripe.customers.list({
			email: paymentData.email,
			limit: 1
		})
		const isExistingCustomer = prevCustomer.data.length > 0
		let newCustomer
		if (!isExistingCustomer) {
			newCustomer = await stripe.customers.create({
				email: paymentData.email,
				source: paymentData.id
			})
		}
		const customer =
			(isExistingCustomer && prevCustomer.data[0].id) || newCustomer.id
		const charge = await stripe.charges.create(
			{
				currency: 'usd',
				amount: stripeTotal,
				receipt_email: paymentData.email,
				customer,
				description: `Checkout | ${paymentData.email} | ${paymentData.id}`
			},
			{
				idempotency_key: uuidv4()
			}
		)
		await new Order({
			user: userId,
			email: paymentData.email,
			total: cartTotal,
			products: cart.products
		}).save()
		await Cart.findOneAndUpdate({ _id: cart._id }, { $set: { products: [] } })
		res.status(200).send('Checkout successful.')
	} catch (error) {
		console.error(error)
		res.status(500).send('Error processing charge.')
	}
}
