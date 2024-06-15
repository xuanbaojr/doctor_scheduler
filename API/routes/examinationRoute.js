const express = require('express')
const router = express.Router()

const examinationControler = require("../controllers/ExaminationControl")


router.get("/timeForDisease", examinationControler.fecthTimeForDisease)

module.exports = router