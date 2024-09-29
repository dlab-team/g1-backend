import data from './query.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

const { JWT_SECRET } = process.env

export const verificarCredenciales = async ({ email, password }) => {
  const consulta = 'SELECT id, rol_id, password FROM usuarios WHERE correo = $1;'
  const values = [email]
  const usuario = await data(consulta, values)
  const { id, rol_id: rol } = usuario[0]
  if (usuario.length === 0) {
    throw new Error('Email o contraseña incorrecta')
  } else {
    const { password: passwordEncriptada } = usuario[0]
    const passwordEsCorrecta = bcrypt.compareSync(password, passwordEncriptada)
    if (passwordEsCorrecta) {
      return { token: jwt.sign(email, JWT_SECRET), id, rol }
    } else throw new Error('Email o contraseña incorrecta')
  }
}
