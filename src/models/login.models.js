import data from './querys.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
const { JWT_SECRET } = process.env

export const verificarCredenciales = async ({ correo, contraseña }) => {
    const consulta = 'SELECT * FROM usuarios WHERE email = $1;'
    const values = [email]
    const usuario = await data(consulta, values)
  
    try {
      const { password: passwordEncriptada, email: userEmail } = usuario[0]
      const passwordEsCorrecta = bcrypt.compareSync(password, passwordEncriptada)
      if (!passwordEsCorrecta || usuario.length === 0) throw console.error('Email o contraseña incorrecta')
      return jwt.sign(userEmail, JWT_SECRET)
    } catch (error) {
      return error
    }
  }