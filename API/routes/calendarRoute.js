const express = require('express')
const router = express.Router()
const calendarController = require("../controllers/calendarController")

router.get('/orderByDoctor/:doctor_id', calendarController.getOrderByDoctor)

module.exports = router