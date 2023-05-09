const express = require("express");
const router = express.Router();
const {
  addMovie,
  getMovies,
  getMovie,
  updateMovie,
  removeMovie,
} = require("../controllers/Movie.controller");

router.get("/", getMovies);

router.get("/:id", getMovie);

router.post("/", addMovie);

router.put("/:id", updateMovie);

router.delete("/:id", removeMovie);

module.exports = router;
