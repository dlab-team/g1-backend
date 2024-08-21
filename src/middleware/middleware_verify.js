import jwt  from ('jsonwebtoken')
const { JWT_SECRET, JWT_ADMIN } = process.env

export const autorizacionUsuario = (req, res, next) => {
  try {
    req.user = verifyToken(extractToken(req))
    next()
  } catch (error) {
    console.log(error)
    return res.status(401).send({ error: 'Invalid token' })
  }
}

const extractToken = (req, res) => {
  const token = req.headers.authorization?.split(' ')[1]
  if (!token) { return res.status(401).json({ error: 'No token provided' }) }
  return token
}

const verifyToken = (token) => {
  const payload = jwt.verify(token, JWT_SECRET)
  if (!token) { return (401).json({ error: 'incorrect Token' }) }
  return payload
}

const verifyAdminToken = (token) => {
  const payload = jwt.verify(token, JWT_ADMIN)
  if (!token) { return (401).json({ error: 'incorrect Token' }) }
  return payload
}

export const autorizacionAdmin = (req, res, next) => {
  try {
    req.user = verifyAdminToken(extractToken(req))
    next()
  } catch (error) {
    console.log(error)
    return res.status(401).send({ error: 'Invalid token' })
  }
}
