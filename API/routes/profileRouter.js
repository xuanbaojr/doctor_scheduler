const express = require('express')
const router = express.Router()
const profileRouter = require('../controllers/profileController')

router.get("/getAllProfileForCus", profileRouter.getAllProfileForCus)
router.get('/getAllProfileForCusOnWeb', profileRouter.getAllProfileForCusForWeb)


module.exports = router