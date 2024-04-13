const express = require('express')
const router = express.Router()

const threadsController = require("../controllers/threadsController")


router.get("/threadAll", threadsController.getAllThread)
router.post("/createNewThread", threadsController.createNewThread)


module.exports = router