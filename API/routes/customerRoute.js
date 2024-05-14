const express = require("express");
const router = express.Router();
const userRouter = require("../controllers/customerController");

router.get("/customer", userRouter.fetchCustomer);
router.post("/createCustomer", userRouter.createCustomer);

module.exports = router;
