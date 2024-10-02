import jwt from "jsonwebtoken"
import dotenv from "dotenv"
import bcrypt from "bcrypt"
import query from "../models/query.js"

dotenv.config()

export const changePass = async (req, res) =>{
    const {token, newPass} = req.body

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        const hashedPass = await bcrypt.hash(newPass, 10)

        const updateQuery = 'UPDATE usuarios SET password = $1 WHERE correo = $2'
        const values = [hashedPass, decoded.email]
        await query(updateQuery, values)

        return res.status(200).json({ message: 'contraseña actualizada'})
    } catch (error) {
        console.error(error)
        return res.status(400).json({ message: 'Token invalido'})
    }
}