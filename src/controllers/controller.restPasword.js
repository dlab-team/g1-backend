import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

export const verifyToken = (req, res) => {
  const { token } = req.query

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    return res.status(200).json({ message: 'token valido', email: decoded.email })
  } catch (error) {
    return res.status(400).json({ message: 'Token invalido o expirado' })
  }
}
