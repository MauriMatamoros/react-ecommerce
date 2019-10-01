import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import connectDb from '../../utils/connectDb'
import User from '../../models/User'

connectDb()

export default async (req, res) => {
	console.log('im in')
	try {
		const { method } = req
		if (method !== 'POST') {
			res.setHeader('Allow', ['POST'])
			return res.status(405).end(`Method ${method} Not Allowed`)
		}
		const { email, password } = req.body
		let user = await User.findOne({ email }).select('+password')
		if (!user) {
			return res.status(404).send(`User with email ${email} not found.`)
		}
		const passwordsMatch = await bcrypt.compare(password, user.password)
		if (passwordsMatch) {
			const token = await jwt.sign(
				{ userId: user._id },
				process.env.JWT_SECRET,
				{
					expiresIn: '1d'
				}
			)
			res.status(201).json(token)
		} else {
			res.status(401).send('Passwords do not match.')
		}
	} catch (error) {
		console.error(error)
		res.status(500).send('Error signing up user. Please try again later.')
	}
}
