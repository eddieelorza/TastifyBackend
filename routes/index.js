const express = require("express")
const router = express.Router()

const authenticate = require('../middlewares/authentication')

router.use('/auth', require('./auth'))
router.use('/products', authenticate, require('./products'))
router.use('/restaurants', authenticate, require('./restaurants'))
router.use('/reservations', authenticate, require('./reservations'))
router.use('/shippingAddress', authenticate, require('./shippingAddress'))
router.use('/reviews', require('./reviews'))
router.use('/users', require('./users'))

module.exports = router