const jwt = require('jsonwebtoken')

const verifyToken = async (req, res, next) => {
  let token = req.header('Authorization')
  try {
    if (!token) {
      res.status(403).json({ message: "You are Not allowed, don't have token" })
    }
    if (token.startsWith('Bearer')) {
      token = token.slice(7, token.length).trimLeft()
    }
    const verified = jwt.verify(token, process.env.JWT_SECRET)
    req.user = verified
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
  next()
}

module.exports = verifyToken
