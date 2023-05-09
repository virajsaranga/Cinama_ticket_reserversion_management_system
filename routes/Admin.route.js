const express = require("express");
const router = express.Router();
const {
  addAdmin,
  getAdmins,
  getAdmin,
  updateAdmin,
  removeAdmin,
  validateAdmin,
} = require("../controllers/Admin.controller");

router.get("/", getAdmins);

router.get("/:id", getAdmin);

router.post("/", addAdmin);

router.put("/:id", updateAdmin);

router.delete("/:id", removeAdmin);

router.post("/validate", validateAdmin);

module.exports = router;
