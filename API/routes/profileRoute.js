const express = require('express')
const router = express.Router()

const profileControler = require("../controllers/ProfileControler")

router.get("/diseaseForCus", profileControler.fecthDiseaseForCustomer)

module.exports = router