import products from '../../static/products.json'
import connectDB from '../../utils/connectDb'

connectDB()

export default async (req, res) => {
	res.status(200).json(products)
}
