const express = require("express");
const router = express.Router();
const userRouter = require("../controllers/customerController");

router.get("/customer", userRouter.fetchCustomer);
router.post("/createCustomer", userRouter.createCustomer);
router.get("/customerId", userRouter.fetchCustomerId)

module.exports = router;
