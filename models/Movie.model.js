const mongoose = require("mongoose");
const { Schema } = mongoose;

const movieSchema = new Schema({
  MovieTitle: String,
  CoverPhoto: String,
  desc: String,
  cast: String,
  theaterName: String,
  date: String,
  time: String,
  price: Number,
});

module.exports = Movie = mongoose.model("Movie", movieSchema);
