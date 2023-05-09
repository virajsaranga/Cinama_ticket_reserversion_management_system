const mongoose = require("mongoose");
const { Schema } = mongoose;

const BookSchema = new Schema({
  email: String,
  title: String,
  theater: String,
  date: String,
  time: String,
  price: String,
  tickets: String,
});

module.exports = Book = mongoose.model("Book", BookSchema);
