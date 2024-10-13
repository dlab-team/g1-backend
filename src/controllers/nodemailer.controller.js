import { getUserData } from "../models/nodemailer.models.js";
import transporter from '../../config/nodemailer.js'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

export const nodemailerForm = async (req, res) => {
    const {email} = req.body

    try {
        const userData = await getUserData(email)

        if(!userData){
            return res.status(404).json({message: 'Usuario no encontrado'})
        }

        const token = jwt.sign({ email: userData.email}, process.env.JWT_SECRET, {expiresIn: '24h'})

        const resetLink = 'https://g1-frontend.netlify.app/login'

        await transporter.sendMail({
          from: `"Recuperación de Contraseña" <${process.env.MAIL_USER}>`,
          to: userData.email,
          subject: 'Recuperación de Contraseña',
          text: `Hola ${userData.nombre} ${userData.apellido}, aquí está tu enlace para restablecer tu contraseña: ${resetLink}`,
          html: `<b>Hola ${userData.nombre} ${userData.apellido}</b>, <br> Aquí está tu enlace para restablecer tu contraseña: <a href="${resetLink}">${resetLink}</a>`  
        })

        return res.status(200).json({ message: 'correo enviado con exito'})
    } catch (error) {
        console.error(error)
        return res.status(400).json({message: 'ups algo salio mal'})
    }

}