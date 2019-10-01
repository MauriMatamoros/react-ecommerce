import Product from '../../../models/Product'

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
			res.setHeader('Allow', ['GET', 'POST', 'DELETE'])
			res.status(405).end(`Method ${method} Not Allowed`)
			break
	}
}

const handleGetRequest = async (req, res) => {
	const product = await Product.findById(req.query._id)
	res.status(200).json(product)
}

const handleDeleteRequest = async (req, res) => {
	// Not returning the deleted item
	const product = await Product.findByIdAndDelete(req.query._id)
	res.status(204).json({})
}
