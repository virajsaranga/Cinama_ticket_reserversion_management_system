const express = require("express");
const router = express.Router();
const {
  addCustomer,
  getCustomers,
  getCustomer,
  updateCustomer,
  removeCustomer,
  validateCustomer,
} = require("../controllers/Customer.controller");

router.get("/", getCustomers);

router.get("/:id", getCustomer);

router.post("/", addCustomer);

router.put("/:id", updateCustomer);

router.delete("/:id", removeCustomer);

router.post("/validate", validateCustomer);

module.exports = router;
