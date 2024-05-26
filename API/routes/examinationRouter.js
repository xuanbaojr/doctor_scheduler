const express = require('express')
const router = express.Router()
const examinationRouter = require("../controllers/examinationController")

router.get("/getAllExmanationForProfile", examinationRouter.getAllExaminationForProfile)
router.get('/getAllResultForExami', examinationRouter.getAllResultForExami)

module.exports = router