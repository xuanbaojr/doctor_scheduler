const express = require('express')
const router = express.Router()
const scheduleRoute = require("../controllers/scheduleController")

router.get('/about', scheduleRoute.bookClinic)


module.exports = router