const express = require('express')
const router = express.Router()
const chatController = require("../controllers/chatController")

router.get('/chat/:nurse_id', chatController.getChatByNurseId)
router.post('/chat', chatController.createChat)
router.get('/getChatByCustomer/:customer_id',chatController.getChatByCustomerId )
router.get('/getListCustomer/:nurse_id', chatController.getListCustomer)
router.get('/getChatHistory/:member', chatController.getChatHistory)
router.get('/getUpdateChat/:current_id', chatController.getUpdateChat)

module.exports = router