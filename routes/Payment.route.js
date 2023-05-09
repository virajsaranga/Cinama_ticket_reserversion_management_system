const express = require("express");
const router = express.Router();
const {
  addPayment,
  getPayments,
} = require("../controllers/Payment.controller");

router.get("/", getPayments);

router.post("/", addPayment);

module.exports = router;
