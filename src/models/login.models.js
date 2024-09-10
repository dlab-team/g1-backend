import data from './query.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
const { JWT_SECRET } = process.env

export const verificarCredenciales = async ({ email, password }) => {
    const consulta = 'SELECT password FROM usuarios WHERE correo = $1;'
    const values = [email]
    const usuario = await data(consulta, values)

    if (usuario.length === 0) {
      throw new Error('Email o contraseña incorrecta')
    } else {
      const { password: passwordEncriptada } = usuario[0]
      const passwordEsCorrecta = bcrypt.compareSync(password, passwordEncriptada)
      if (passwordEsCorrecta) {
        return jwt.sign(email, JWT_SECRET)
      } else throw new Error('Email o contraseña incorrecta')
    }
  }