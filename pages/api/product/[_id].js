import Product from '../../../models/Product'
import connectDb from '../../../utils/connectDb'
import Cart from '../../../models/Cart'

connectDb()

export default async (req, res) => {
	const { method } = req
	switch (method) {
		case 'GET':
			await handleGetRequest(req, res)
			break
		case 'DELETE':
			await handleDeleteRequest(req, res)
			break
		default:
			res.setHeader('Allow', ['GET', 'DELETE'])
			res.status(405).end(`Method ${method} Not Allowed`)
			break
	}
}

const handleGetRequest = async (req, res) => {
	const product = await Product.findById(req.query._id)
	res.status(200).json(product)
}

// need to add auth to this function
const handleDeleteRequest = async (req, res) => {
	try {
		const { _id } = req.query
		const product = await Product.findByIdAndDelete(_id)
		//remove product from all carts, references as product | cascade delete
		await Cart.updateMany(
			{ 'products.product': _id },
			{ $pull: { products: { product: _id } } }
		)
		res.status(204).json({ product })
	} catch (error) {
		console.error(error)
		res.status(500).send('Error deleting product')
	}
}
