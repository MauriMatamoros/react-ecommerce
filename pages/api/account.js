import jwt from 'jsonwebtoken'

import User from '../../models/User'
import connectDb from '../../utils/connectDb'

connectDb()

export default async (req, res) => {
	const { method } = req
	if (method !== 'GET') {
		res.setHeader('Allow', ['GET'])
		return res.status(405).end(`Method ${method} Not Allowed`)
	}
	// Add this to make a route secure
	if (!('authorization' in req.headers)) {
		return res.status(401).send('No authorization token.')
	}
	try {
		const { userId } = jwt.verify(
			req.headers.authorization,
			process.env.JWT_SECRET
		)
		const user = await User.findById(userId)
		if (user) {
			res.status(200).json(user)
		} else {
			res.status(404).send('User not found.')
		}
	} catch (error) {
		res.status(403).send('Invalid token.')
	}
}
