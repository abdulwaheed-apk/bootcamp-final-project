const jwt = require('jsonwebtoken')

const verifyToken = async (req, res, next) => {
  try {
    let token = req.header('Authorization')
    if (!token) {
      return res.status(401).send("You are Not allowed, don't have token")
    }
    if (token.startsWith('Bearer')) {
      token = token.slice(7, token.length).trimLeft()
    }
    const verified = jwt.verify(token, process.env.JWT_SECRET)
    req.user = verified
    next()
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

module.exports = verifyToken
