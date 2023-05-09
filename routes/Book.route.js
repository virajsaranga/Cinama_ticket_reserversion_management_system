const express = require("express");
const router = express.Router();
const {
  addBooking,
  getBookings,
  getBooking,
  updateBooking,
  removeBooking,
} = require("../controllers/Book.controller");

router.get("/", getBookings);

router.get("/:id", getBooking);

router.post("/", addBooking);

router.put("/:id", updateBooking);

router.delete("/:id", removeBooking);

module.exports = router;
