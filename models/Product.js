import mongoose from 'mongoose'
import shortid from 'shortid'

const { String, Number } = mongoose.Schema.Types

const ProductSchema = new mongoose.Schema({
	name: {
		required: true,
		type: String
	},
	price: {
		required: true,
		type: Number
	},
	description: {
		type: String,
		required: true
	},
	sku: {
		type: String,
		default: shortid.generate(),
		unique: true
	},
	mediaUrl: {
		type: String,
		required: true
	}
})

//Serverless config
export default mongoose.models.Product ||
	mongoose.model('Product', ProductSchema)
